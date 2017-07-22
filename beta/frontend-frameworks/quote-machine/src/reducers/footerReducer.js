import {actionTypes} from '../actions/actionsIndex'

const defaultState = {
    author: "Fetching quotes..",
    quote: " "
};

export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.fetch_success:
            return {
                ...state,
                quote: action.payload.quote,
                author: action.payload.author
            }
        case actionTypes.fetch_failure:
            return {
                ...state,
                quote: "This API's free access has an upper limit of 100 requests/day, it exceeded",
                author: "broke ass dev"
            }
        default: 
            return state;
    }
};
