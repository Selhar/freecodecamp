export const actionTypes = {
    change_display_value: "CHANGE_DISPLAY"
}

export const change_display_value = (value) => {
    return{
        type: actionTypes.change_display_value,
        value
    }
}