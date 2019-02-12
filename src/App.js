import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './homepage/Homepage';
import Folder from './folder/Folder';
import Note from './note/Note';
import Notfound from './Notfound';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' component={Homepage}/>
          <Route path='/folder' component={Folder} />
          <Route path='/note' component={Note} />
          <Route component={Notfound} />
        </Switch>
      </div>
    );
  }
}

export default App;
