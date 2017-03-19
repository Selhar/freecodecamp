export const actionTypes = {
    changeLabel: "CHANGE_LABEL"
}

export default (label) => {
    return {
        type: actionTypes.changeLabel,
        label
    }
}