import React, { Component } from 'react';

class Main extends Component {

    handleClickedNote(){
        console.log('Note was clicked');
    }
    render(){
        let notes = this.props.notes;
        if (this.props.isFolderSelected) {
            notes = this.props.notes.filter(note => note.folderId === this.props.folderId)
        }
        const noteList = notes.map(note => {
            return (
                <div key={note.id}>
                    <h3>{note.name}</h3>
                    <p>Modified on {note.modified}</p>
                    <button onClick={this.handleDeleteNote}>Delete Note</button>
                </div>
            )
        })
        
        return (
            <div>
                {noteList}
           </div>
        )
    }
}

export default Main