import {actionTypes} from '../actions/indexAction'

const defaultState = {
    //TODO
};

export default (state = defaultState, action) => {
    switch (action.type){
        case "actionTypes.TODO":
            return {
                ...state
                //TODO
            }
        case "actionTypes.TODO":
            return {
                ...state,
                //TODO
            }
        default: 
            return state;
    }
};
