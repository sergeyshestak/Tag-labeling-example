import React, { useEffect, useState } from 'react';
import ImageArea from '../ImageArea/ImageArea';
import ListOfNotes from '../ListOfNotes/ListOfNotes';
import LeftMenu from '../LeftMenu/LeftMenu';
import Header from '../Header/Header';
import styles from './App.module.css';

const windowWidth = window.innerWidth;

function App() {
  const [width, setWidth] = useState(windowWidth);

  useEffect(() => {
    const resizeEventListener = () => setWidth(window.innerWidth);

    window.addEventListener('resize', resizeEventListener);

    return () => {
      window.removeEventListener('resize', resizeEventListener);
    };
  }, []);

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <LeftMenu />
        <div className={
          width > 720
            ? styles.imageAndNotesContainer
            : styles.imageAndNotesContainerToTablet
          }
        >
          <ImageArea />
          <ListOfNotes />
        </div>
      </div>
    </>
  );
}

export default App;
