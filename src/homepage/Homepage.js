import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../mainComponent/Main';
import Sidebar from '../mainComponent/Sidebar';


class Homepage extends Component {
    render(){
        console.log(this.props.store);
    
        return (
            <div>
                <header>Noteful</header>
                <Route  
                    exact
                    path='/' 
                    render = {() =>
                        <Sidebar folders={this.props.store.folders} setFolderId={this.props.setFolderId}/>
                    }
                />
                {/* <Route path='/:folder-id'  component={Sidebar}/> */}
                <Route 
                    exact
                    path='/' 
                    render = {() =>
                        <Main notes={this.props.store.notes}/>
                    }
                />
                {/* <Route path='/:note-id' component={Main}/> */}
                
            </div>
        )
    }
}

export default Homepage