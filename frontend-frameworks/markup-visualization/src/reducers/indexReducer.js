import actionTypes from '../actions/indexAction'

const defaultState = {
    text: `
                Github markdown previewer
                =======
                You can type github markdown text in here and get the output instantly.  
                For Github's markdown full documentation go [here](https://guides.github.com/features/mastering-markdown/).
            `
};

export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.processUserInput:
            return {
                ...state,
                text: action.userInput
            }
        default: 
            return state;
    }
};
