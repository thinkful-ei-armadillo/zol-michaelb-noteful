import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../mainComponent/Main';
import Sidebar from '../mainComponent/Sidebar';


class Homepage extends Component {
    render(){
        console.log(this.props.store.folders);
        return (
            <div>
                <header>Noteful</header>
                <Sidebar>
                    <Route path='/' 
                    component={Sidebar} 
                    render = {() =>
                    <Sidebar folders={this.props.store.folders}/>}/>
                    <Route path='/folder/:folder-id' component={Sidebar}/>
                </Sidebar>
                <Main>
                    <Route path='/note' component={Main}/>
                    <Route path='/note/:note-id' component={Main}/>
                </Main>
            </div>
        )
    }
}

export default Homepage