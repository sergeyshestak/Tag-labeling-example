import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import addNote from '../../store/actionCreator/addNote';
import formVisibility from '../../store/actionCreator/formVisibility';
import currentTag from '../../store/actionCreator/currentTag';
import styles from './TagForm.module.css';

function TagForm(props) {
  const { position } = props;
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const handleSubmit = useCallback((positionX, positionY, value) => {
    const id = `${Math.random() * Date.now()}`;

    dispatch(formVisibility(false));
    dispatch(currentTag(id));
    dispatch(addNote({
      id,
      tagPositionX: positionX,
      tagPositionY: positionY,
      note: value,
    }));
  }, []);

  const handleCancel = useCallback(() => {
    dispatch(formVisibility(false));
  }, []);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ left: position.clickX, top: position.clickY + 10 }}
      className={styles.form}
    >
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button type="button" onClick={() => handleSubmit(position.left, position.top, inputValue)}>Ok</button>
      <button type="button" onClick={() => handleCancel()}>Cansel</button>
    </form>
  );
}

export default TagForm;
