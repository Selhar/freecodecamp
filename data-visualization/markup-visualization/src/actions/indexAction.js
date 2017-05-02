
export const actionTypes = {
    processUserInput: "PROCESS_USER_INPUT"
}

export default (input) => {
    return{
        type: actionTypes.processUserInput,
        userInput: input
    }
}