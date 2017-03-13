import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Index from './components/index';
import store from './store';

const css = require('./main.scss');

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  
  document.getElementById('main')
);