import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import changeSrc from '../../store/actionCreator/changeSrc';
import styles from './Header.module.css';

const Header = React.memo(() => {
  const dispatch = useDispatch();
  const updateImageSrc = useCallback((file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      dispatch(changeSrc(e.target.result));
    };
  });

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
    <header className={styles.header}>
      <div className={styles.formsContainer}>
        <form className={styles.fileUploadForm} onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="fileUpload" className={styles.fileUploadLabel}>
            <input
              id="fileUpload"
              type="file"
              accept="image/*"
              className={styles.fileUploadInput}
              onDrop={(e) => onDrop(e)}
              onChange={(e) => handleChange(e)}
            />
            <p>Drop or Browse file</p>
          </label>
        </form>
        <form className={styles.loginForm} onSubmit={(e) => e.preventDefault()}>
          <input id="search" className={styles.loginInput} />
          <button type="button">Log in</button>
        </form>
      </div>
    </header>
  );
});

export default Header;
