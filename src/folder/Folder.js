import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../mainComponent/Main';
import Sidebar from '../mainComponent/Sidebar';

class Folder extends Component {
    render(){
        return (
            <div>
            <header>Noteful</header>
            <Route path='/folder' component={Sidebar} />
            <Route path='/folder/:folderId' 
                render = {() => 
                    <Folder 
                        folders = {this.props.store.folders}  
                        setFolderId = {this.props.setFolderId}
                    />
                }
            />
            
            <Route path='/note' component={Main}/>
            <Route path='/note/:folderId' 
                      render = {() => 
                        <Main 
                            notes = {this.props.store.notes} 
                            folderId = {this.props.folderId} 
                            isFolderSelected = {this.props.isFolderSelected}  
                        />
                    }
            />
        </div>
        )
    }
}

export default Folder