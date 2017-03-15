export const actionTypes = {
    changeClock: "CHANGE_CLOCK",
    isActive: "CHANGE_STATUS"
}

const validateInput = (input) => {
    let minutes = input.slice(0,2);
    let seconds = input.slice(-2);
    seconds = seconds[0] == ":" ? "0" + seconds[1] : seconds;
    minutes = minutes[1] == ":" ? "0" + minutes[0] : minutes;
    return validateTime(minutes, 60, 0) + ":" + validateTime(seconds, 60, 0);
}

const validateTime = (input, max, min) => {
    return  undefined === input ? "" :
                isNaN(input) ? "" :
                input < min ? min :
                input > max ? max :
                input;
}

export const changeClock = (event) => {
    return {
        type: actionTypes.changeClock,
        clock: validateInput(event.target.value)
    }
}

export const isActive = (isActive) => {
    return {
        type: actionTypes.isActive,
        isActive: !isActive};
}