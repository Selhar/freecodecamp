export const actionTypes = {
    change_display_value: "CHANGE_DISPLAY",
    change_operation: "CHANGE_OPERATION",
    set_operand: "SET_OPERAND",
    clear: "CLEAR"
}

export const change_display_value = (display_value) => {
    return{
        type: actionTypes.change_display_value,
        display_value
    }
}

export const change_operation = (operation) => {
    return{
        type: actionTypes.change_operation,
        operation
    }
}

export const set_operand = (operand) => {
    return{
        type: actionTypes.set_operand,
        operand
    }
}

export const clear = () => {
    return{
        type: actionTypes.clear
    }
}