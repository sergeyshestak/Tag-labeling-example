import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import formVisibility from '../../store/actionCreator/formVisibility';
import currentTag from '../../store/actionCreator/currentTag';
import Note from '../Note/Note';
import styles from './ImageArea.module.css';

const ImageArea = React.memo(() => {
  const [src, setSrc] = useState();
  const [clickX, setClickX] = useState();
  const [clickY, setClickY] = useState();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const isFormActive = useSelector((state) => state.isFormActive);
  const tag = useSelector((state) => state.currentTag);
  const handleClick = useCallback((e) => {
    setClickX(e.pageX);
    setClickY(e.pageY);
    dispatch(currentTag(''));
    dispatch(formVisibility(true));
  }, []);

  const handleClickOnTag = useCallback((id) => {
    dispatch(currentTag(id));
  }, []);

  function onDr(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function updateImageSrc(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setSrc(e.target.result);
    };
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const dt = e.dataTransfer;
    const { files } = dt;
    updateImageSrc(files[0]);
  }

  function handleChange(e) {
    updateImageSrc(e.target.files[0]);
  }

  return (
    <>
      <form>
        <label
          htmlFor="fileUpload"
        >
          <input
            className={styles.fileUpload}
            type="file"
            id="fileUpload"
            accept="image/*"
            onDrop={(e) => onDrop(e)}
            onDragEnter={(e) => onDr(e)}
            onDragOver={(e) => onDr(e)}
            onDragLeave={(e) => onDr(e)}
            onChange={(e) => handleChange(e)}
          />
          Upload image
        </label>
      </form>
      <div onClick={(e) => handleClick(e)}>
        <img src={src} alt="" />
      </div>
      <ul>
        {notes.map((note) => (
          <div
            key={note.id}
            className={note.id === tag ? `${styles.tag} ${styles.currentTag}` : `${styles.tag}`}
            style={{ left: note.tagPositionX, top: note.tagPositionY }}
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
            <Note position={{ left: clickX, top: clickY }} />
          </>
        )
        : null}
    </>
  );
});

export default ImageArea;
