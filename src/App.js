import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './homepage/Homepage';
import Folder from './folder/Folder';
import Note from './note/Note';
import Notfound from './Notfound';


import './App.css';

class App extends Component {
 constructor(props){
   super(props)
   this.state = {
     store: {...this.props.store},
     folderId: '',
     isFolderSelected: false,
     noteId: ''
   }
} 

setFolderId = (id) =>{
  this.setState({
    folderId: id,
    isFolderSelected: true
  })
}

setNoteId = (id) =>{
  this.setState({
    noteId: id
  })
}
  render() {
    const { store } = this.state.store
    return (
      <div className="App">
        <Switch>
          <Route  path='/'
                  exact  
                  render = {() => 
                    <Homepage store={store}/>
                  }
          />
          <Route 
                  path='/folder/:folderId' 
                  render = {() => <Folder 
                    store={store}
                    setFolderId={this.setFolderId}
                    folderId = {this.folderId} 
                    isFolderSelected = {this.isFolderSelected}
                    />
                  } 
          />
          <Route path='/note/:folderId' component={Note} />
          <Route component={Notfound} />
        </Switch>
      </div>
    );
  }
}

export default App;
