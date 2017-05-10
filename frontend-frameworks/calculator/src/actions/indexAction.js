export const actionTypes = {
    change_display_value: "CHANGE_DISPLAY",
    clear: "CLEAR",
    toggle: "TOGGLE"
}

export const change_display_value = (display_value) => {
    return{
        type: actionTypes.change_display_value,
        display_value
    }
}

export const clear = () => {
    return{
        type: actionTypes.clear
    }
}

export const toggle = () => {
    return{
        type: actionTypes.toggle
    }
}