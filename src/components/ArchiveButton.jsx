import React from "react";

function ArchiveButton({ id, onArchive, archived }) {
    return      archived ? 
            <button className="note-item__archive-button" onClick={() => onArchive(id)}>Pindahkan</button> : 
            <button className="note-item__archive-button" onClick={() => onArchive(id)}>Arsipkan</button> 

}

export default ArchiveButton;