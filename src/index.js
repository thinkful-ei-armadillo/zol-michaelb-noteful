import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './store';
import App from './App';


ReactDOM.render(
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>, 
            document.getElementById('root')
            );


