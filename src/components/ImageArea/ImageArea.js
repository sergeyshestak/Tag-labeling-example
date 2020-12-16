import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import formVisibility from '../../store/actionCreator/formVisibility';
import currentTag from '../../store/actionCreator/currentTag';
import TagForm from '../TagForm/TagForm';
import styles from './ImageArea.module.css';

const ImageArea = React.memo(() => {
  const [tagPositionX, setTagPositionX] = useState();
  const [tagPositionY, setTagPositionY] = useState();
  const [clickX, setClickX] = useState();
  const [clickY, setClickY] = useState();
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imagePositionX, setImagePositionX] = useState(0);
  const [imagePositionY, setImagePositionY] = useState(0);
  const imageRef = useRef();

  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const isFormActive = useSelector((state) => state.isFormActive);
  const tag = useSelector((state) => state.currentTag);
  const src = useSelector((state) => state.src);

  const handleClick = useCallback((e, width, height) => {
    setClickX(e.pageX);
    setClickY(e.pageY);
    setTagPositionX((e.pageX - imageRef.current.offsetLeft) * (100 / width));
    setTagPositionY((e.pageY - imageRef.current.offsetTop) * (100 / height));
    dispatch(currentTag(''));
    dispatch(formVisibility(true));
  }, []);

  const handleClickOnTag = useCallback((id) => {
    dispatch(currentTag(id));
  }, []);

  useEffect(() => {
    setImagePositionX(imageRef.current.offsetLeft);
    setImagePositionY(imageRef.current.offsetTop);
    setImageWidth(imageRef.current.offsetWidth);
    setImageHeight(imageRef.current.offsetHeight);

    const resizeEventListener = () => {
      setImagePositionX(imageRef.current.offsetLeft);
      setImagePositionY(imageRef.current.offsetTop);
      setImageHeight(imageRef.current.offsetHeight);
      setImageWidth(imageRef.current.offsetWidth);
    };

    window.addEventListener('resize', resizeEventListener);

    return () => {
      window.removeEventListener('resize', resizeEventListener);
    };
  }, [src]);

  return (
    <div className={styles.imageAreaContainer}>
      {src
        ? (
          <div onClick={(e) => handleClick(e, imageWidth, imageHeight)}>
            <img src={src} alt="" className={styles.image} ref={imageRef} />
          </div>
        )
        : null}
      <ul>
        {notes.map((note) => (
          <div
            key={note.id}
            className={note.id === tag ? `${styles.tag} ${styles.currentTag}` : `${styles.tag}`}
            style={{
              left: (note.tagPositionX * imageWidth) / 100 + imagePositionX,
              top: (note.tagPositionY * imageHeight) / 100 + imagePositionY,
            }}
            onClick={() => handleClickOnTag(note.id)}
          />
        ))}
      </ul>

      {isFormActive
        ? (
          <>
            <div
              className={`${styles.currentTag} ${styles.tag}`}
              style={{ left: clickX, top: clickY }}
            />
            <TagForm position={{
              left: tagPositionX, top: tagPositionY, clickX, clickY,
            }}
            />
          </>
        )
        : null}
    </div>
  );
});

export default ImageArea;
