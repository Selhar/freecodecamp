import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/indexReducer';

const middleware = applyMiddleware(thunk, logger());

export default createStore(reducer, middleware);