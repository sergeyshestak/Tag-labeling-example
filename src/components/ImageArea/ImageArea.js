import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addNote from '../../store/actionCreator/add_note';
import Note from '../Note/Note';
import styles from './ImageArea.module.css';

function ImageArea(props) {
  const [src, setSrc] = useState();
  const { notes: notesProp } = props;
  const [notes, setNotes] = useState(notesProp);
  // const [clickX, setClickX] = useState();
  // const [clickY, setClickY] = useState();
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

  function handleClick(e) {
    // setClickX(e.clientX);
    // setClickY(e.clientY);
    console.log(props, 'asd')
    props.addNote({
      tagPositionX: e.clientX, tagPositionY: e.clientY, note: '123',
    });
  }

  console.log(props, 'asd2')

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
        {props.notes.forEach((el, id) => (
          <li key={id}>
            <p>{id}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function mapDispatchToProps() {
  return function (dispatch) {
    return { addNote: bindActionCreators(addNote, dispatch) };
  };
}

function mapStateToProps() {
  return function (state) {
    return { notes: state.notes };
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageArea);
