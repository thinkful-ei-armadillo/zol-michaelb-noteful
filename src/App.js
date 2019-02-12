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
     store: {...this.props.store}
   }
} 

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/'
          exact  
          render = {() => 
          <Homepage 
          store={this.state.store}/>}/>
          <Route path='/folder' component={Folder} />
          <Route path='/note' component={Note} />
          <Route component={Notfound} />
        </Switch>
      </div>
    );
  }
}

export default App;
