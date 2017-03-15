import {actionTypes} from '../actions/indexAction'

const defaultState = {
    clock: "25:00",
    isActive: false
};

export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.changeClock:
            return {
                ...state,
                clock: action.clock                
            }
        case actionTypes.isActive:
            return {
                ...state,
                isActive: action.isActive
            }
        default: 
            return state;
    }
};
