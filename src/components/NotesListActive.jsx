import React from "react";
import NotesItem from "./NotesItem";


function NotesListActive({ notes, onDelete, onArchive }) {
    return (
        <div className="notes-list">
            {  
                notes.length !== 0 ?
                notes.map((note) => (
                    < NotesItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note}  />
                )) : <p className="notes-list__empty-message">Catatan tidak di temukan</p>
            }
        </div>
    )
}

export default NotesListActive;