import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Index from './components/index';
import reduceQuote from './reducers/reduceIndex';
import {defaultState} from './actions/actionsIndex'

const css = require('./main.scss');
let store = createStore(reduceQuote, defaultState);

console.log(store.getState());
render(
  <Provider store={store}>
    <Index />
  </Provider>,
  
  document.getElementById('main')
);