import React from 'react';

function Note() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" />
      <button type="button">Ok</button>
      <button type="button">Cansel</button>
    </form>
  );
}

export default Note;
