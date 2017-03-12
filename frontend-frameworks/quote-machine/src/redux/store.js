const defaultState = {
    quote: "Fetching data..."
};

export const actions = {
    NEW_QUOTE: 'NEW_QUOTE'
}

export const quote = (state = defaultState, action) => {
    switch (action.type){
        case actions.NEW_QUOTE:
            return Object.assign({}, state, {
                quote: action.quote
            });
        default: 
            return state;
    }
}