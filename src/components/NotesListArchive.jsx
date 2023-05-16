import React from "react";
import NotesItem from "./NotesItem";


function NotesListArchive({ archive, onDelete, onArchive }) {
    return (
        <div className="notes-list">
            {
                archive.length !== 0 ? 
                archive.map((note) => (
                    < NotesItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
                )) : <p className="notes-list__empty-message">Catatan tidak di temukan</p>
            }
        </div>
        
    )
}

export default NotesListArchive;