import React, { Component } from 'react';

class Main extends Component {

    handleClickedNote(){
        console.log('Note was clicked');
    }
    render(){
        return (
            <div>
                <ul>
                    <li>Note 1</li>
                    <li>Note 2</li>
                </ul>
           </div>
        )
    }
}

export default Main