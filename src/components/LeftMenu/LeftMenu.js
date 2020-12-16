import React, { useState } from 'react';
import styles from './LeftMenu.module.css';

function LeftMenu() {
  const menuButtons = ['Home', 'About', 'Profile', 'Contacts', 'Info'];
  const [currentButton, setCurrentButton] = useState();
  return (
    <div className={styles.menu}>
      {menuButtons.map((el) => (
        <div key={el} className={el === currentButton ? `${styles.button} ${styles.currentButton}` : `${styles.button}`} onClick={() => setCurrentButton(el)}>
          <p>{el}</p>
        </div>
      ))}
    </div>
  );
}

export default LeftMenu;
