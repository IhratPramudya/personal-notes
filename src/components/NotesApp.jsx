import React from "react";
import NotesListActive from "./NotesListActive";
import NotesListArchive from "./NotesListArchive";
import NotesInput from "./NotesInput";
import { getInitialData } from '../utils/index'


class NotesApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
            archive: []
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onAddArchiveHandler = this.onAddArchiveHandler.bind(this)
        this.onDeleteArchivedHandler = this.onAddArchiveHandler.bind(this)
    }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter((contact) => contact.id !== id);
        this.setState({ notes })
    }

    onDeleteArchivedHandler(id) {
        const archive = this.state.archive.filter((contact) => contact.id !== id);
        this.setState({ archive })
    }

    onAddNotesHandler({ title, body }) {
        this.setState((preventState) => ({
            notes: [
                ...preventState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    archived: false,
                    createdAt: new Date().toISOString(),
                }
            ],
        }))
    }

    onAddArchiveHandler(id) {
        const notes = this.state.notes.find((note) => note.id === id)
        if (notes.archived === true) {
            notes.archived = false
        } else if(notes.archived === false) {
            notes.archived = true
        }

        this.setState(() => ({
            notes: [
                ...this.state.notes
            ]
        }))

    }
    render() {
        return (
            <div>
                < NotesInput addNotes={this.onAddNotesHandler}/>
                <h2 className="notes-app__title">Catatan Aktif</h2>
                < NotesListActive notes={this.state.notes.filter((n) => n.archived === false)} onDelete={this.onDeleteEventHandler} onArchive={this.onAddArchiveHandler} />
                <h2 className="notes-app__title">Arsip</h2>
                < NotesListArchive archive={this.state.notes.filter((n) => n.archived === true)} onDelete={this.onDeleteEventHandler} onArchive={this.onAddArchiveHandler} />
            </div>
        )
    }
}

export default NotesApp;