import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {TextField, Footer} from './react/components/components';
import {actions, quote} from './redux/store';
import { createStore } from 'redux';
const css = require('./main.scss');

let store = createStore(quote);

//add proptypes check, bitch

class Main extends Component {    
    render() {
        return (
            <div className="board">
                <h3 className="title is-3">Quote generator</h3>
                <TextField/>
                <Footer/>
            </div>
        );
    }
}

render(
  <Main />,
  document.getElementById('main')
);