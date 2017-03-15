export const actionTypes = {
    changeClock: "CHANGE_CLOCK",
    isActive: "CHANGE_STATUS"
}

export const changeClock = (input) => {
    return {
        type: actiontypes.changeClock,
        clock: input + "x"
    }
}

export const isActive = (isActive) => {
    return {
        type: actiontypes.isActive,
        isActive: !isActive};
}