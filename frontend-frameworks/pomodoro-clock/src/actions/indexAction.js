export const actionTypes = {
    changeClock: "CHANGE_CLOCK",
    toggleStatus: "TOGGLE_STATUS",
    tickClock: "TICK_CLOCK"
}

export const changeClock = (input) => {
    let sanitizedData = input.target  ? validateInput(input.target.value) : input;
    
    return {
        type: actionTypes.changeClock,
        clock: sanitizedData
    }
}

export const toggleStatus = (status) => {
    return {
        type: actionTypes.toggleStatus,
        isActive: !status
    }
}

export const tickClock = (status, clock) => {
    let result = {
        type: actionTypes.tickClock,
        clock: clock,
        isActive: status
    }
    if (result.isActive === true && clock !== "00:00"){
        let minutes = clock.slice(0,2);
        let seconds = clock.slice(-2);
        
        if(seconds == 0 && minutes > 0){   
            minutes--;
            seconds = 59;
        }else if(minutes == 0 && seconds == 1){
            seconds--;
            result.isActive = false;
        }else{
            seconds--;
        }
        result.clock = validateInput(minutes + ":" + seconds);
        
    }
    return result;
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