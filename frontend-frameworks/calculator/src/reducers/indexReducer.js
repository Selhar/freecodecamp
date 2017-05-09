import {actionTypes} from '../actions/indexAction'

const defaultState = {
    display_value: 0
};

export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.change_display_value:
            return {
                ...state,
                display_value: action.display_value
            }
        case actionTypes.clear:
            return {
                display_value: defaultState.display_value
            }
        default: 
            return state;
    }
};
