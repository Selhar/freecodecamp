export const actionTypes = {
    ADD_QUOTE: 'ADD_QUOTE'
}

const ADD_QUOTE = (quote, author) => {
    return {
        type: ADD_QUOTE,
        quote,
        author
    }
}

export const defaultState = {
    quote: "Fetching data...",
    author: "--"
};

export default ADD_QUOTE;