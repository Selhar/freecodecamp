import {actionTypes} from '../actions/indexAction'

const defaultState = {
    label: "OUTPUT"
};

export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.changeLabel:
            return {
                ...state,
                label: action.label
            }
        default: 
            return state;
    }
};
