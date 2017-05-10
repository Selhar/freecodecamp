export const actionTypes = {
    change_display_value: "CHANGE_DISPLAY"
}

export const change_display_value = (display_value) => {
    return{
        type: actionTypes.change_display_value,
        display_value
    }
}