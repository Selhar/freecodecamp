export const actionTypes = {
    changeClock: "CHANGE_CLOCK",
    isActive: "CHANGE_STATUS"
}

export const changeClock = (input) => {
    return input + "x";
}

export const isActive = (isActive) => {
    return {isActive: !state.isActive};
}