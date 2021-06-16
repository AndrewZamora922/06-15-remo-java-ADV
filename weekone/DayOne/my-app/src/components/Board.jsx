import React, { useState } from "react";
import "./Board.css";
import Note from "./Notes";
function Board() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    notes.push({id: Date.now});
    setNotes([notes]);
  };

  const handleDelete = (id) =>{
    let newNoteArr = notes
    newNoteArr.map((note, idx)=>{
      if(id === note.id){
        newNoteArr.splice(idx, 1);
      }
    })
    setNotes(newNoteArr)
  }

  return (
    <div>
      <div className="div-board">
        <div className="row">
          {notes.map((note) => {
            return <Note 
            title={note.title} 
            body={note.body} 
            handleDelete={handleDelete} 
            />;
          })}
        </div>
      </div>
      <div>
        <button className="btn btn-success add-button" onClick={addNote}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Board;