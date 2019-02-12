import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../mainComponent/Main';
import Sidebar from '../mainComponent/Sidebar';

class Folder extends Component {
    render(){
        return (
            <div>
            <header>Noteful</header>
            <Sidebar>
                <Route path='/' component={Folder} />
            </Sidebar>
            <Main>
                <Route path='/note' component={Note}/>
            </Main>
        </div>
        )
    }
}

export default Folder