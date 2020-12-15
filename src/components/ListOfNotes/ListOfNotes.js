import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currentTag from '../../store/actionCreator/currentTag';
import deleteNote from '../../store/actionCreator/deleteNote';
import styles from './ListOfNotes.module.css';

const ListOfNotes = React.memo(() => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const tag = useSelector((state) => state.currentTag);
  const handleClick = useCallback((id) => {
    dispatch(currentTag(id));
  }, []);

  const handleDeleteNote = useCallback((arr, id) => {
    dispatch(deleteNote(arr.filter((note) => note.id !== id)));
  }, []);

  return (
    <ul>
      {notes.map((el) => (
        <li
          key={el.id}
          onClick={() => handleClick(el.id)}
          className={el.id === tag ? `${styles.note} ${styles.currentNote}` : `${styles.note}`}
        >
          <p>{el.note}</p>
          <button type="button" onClick={() => handleDeleteNote(notes, el.id)} />
        </li>
      ))}
    </ul>
  );
});

export default ListOfNotes;
