import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
   

    handleClickedFolder(id){
        console.log('folder clicked, and id is', id);
        // this.props.setFolderId(id)
    }
    render(){
        console.log(this.props.folders);
        const folders = this.props.folders.map((folder) => {
            return (
                <Link to={'/folder'}>
                    <li 
                        id={folder.id} 
                        key={folder.id} 
                        onClick={(e) => this.handleClickedFolder(e.currentTarget.id)}>
                        {folder.name}
                    </li>
                </Link>
            )
        })
        return (
            <div>
                <ul>
                    {folders}
                </ul>
                <div className='add-folder'>Add Folder</div>
            </div>
            
        )
    }
}

export default Sidebar