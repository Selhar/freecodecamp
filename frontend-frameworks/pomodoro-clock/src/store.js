import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/indexReducer';
import {tickClock} from './actions/indexAction';

const middleware = applyMiddleware(thunk, logger());
export const store = createStore(reducer, middleware);

let interval = null;
store.subscribe(() => {
    if(store.getState().isActive && interval === null){
        interval = setInterval( () => store.dispatch(tickClock(store.getState().isActive, store.getState().clock)), 1000);
    }
    if(!store.getState().isActive && interval !== null){
        clearInterval(interval);
        interval = null;
    }
})
export default store;