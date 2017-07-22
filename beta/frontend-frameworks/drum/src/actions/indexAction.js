export const actionTypes = {
    changeLabel: "CHANGE_LABEL"
}

export const changeLabel = (label) => {
    return {
        type: actionTypes.changeLabel,
        label
    }
}