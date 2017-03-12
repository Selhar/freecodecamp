import React from 'react';
import {render} from 'react-dom';
import {quote} from './redux/store';
import {createStore} from 'redux';
import {App} from './react/components/components';
import {Provider} from 'react-redux';

const css = require('./main.scss');
let store = createStore(quote);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('main')
);