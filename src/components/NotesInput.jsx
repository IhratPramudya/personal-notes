import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        return this.setState(() => ({
            title: event.target.value
        }))
    }

    onBodyChangeEventHandler(event) {
        return this.setState(() => ({
            body: event.target.value
        }))
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        this.props.addNotes(this.state)
    }

    render() {
        return (
            <div className="note-input">
                <form action="" onSubmit={this.onSubmitEventHandler}>
                    <input type="text" value={this.state.title} placeholder="Ini Adalah judul" onChange={this.onTitleChangeEventHandler} required/>
                    <textarea name="" id="" cols="30" rows="10" value={this.state.body} onChange={this.onBodyChangeEventHandler} required>

                    </textarea>
                    <button type="submit" >Add</button>
                </form>
            </div>
        )
    }
}

export default NotesInput;