import {defaultState, actionTypes} from '../actions/actionsIndex'

const reduceQuote = (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.NEW_QUOTE:
            return Object.assign({}, state, {
                quote: action.quote,
                author: action.author
            });
        default: 
            return state;
    }
}
export default reduceQuote;