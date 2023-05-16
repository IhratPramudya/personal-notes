import React from "react";
import NotesItemContent from "./NotesItemContent";
import NotesAction from "./NotesAction";


function NotesItem({ id, title, body, createdAt, onDelete, onArchive, archived }) {
    return (
        <div className="note-item">
            < NotesItemContent title={title} body={body} createdAt={createdAt} />
            < NotesAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
        </div>
    )
}

export default NotesItem;