import {actionTypes} from '../actions/indexAction'

export const defaultState = {
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
        case actionTypes.toggleStatus:
            return {
                ...state,
                isActive: action.isActive
            }
        case actionTypes.tickClock:
            return {
                ...state,
                clock: action.clock,
                isActive: action.isActive
            }
        default: 
            return state;
    }
};
