import React, { Component } from 'react';

class Sidebar extends Component {
   

    handleClickedFolder(){
        console.log('folder clicked');
    }
    render(){
        // const { id, name } = this.props.folders
        console.log(this.props.folders);
        return (
            <div>
                <ul>
                    <li onClick={this.handleClickedFolder}>Folder 1</li>
                    <li>Folder 2</li>
                    <li>Folder 3</li>
                </ul>
                <div className='add-folder'>Add Folder</div>
            </div>
            
        )
    }
}

export default Sidebar