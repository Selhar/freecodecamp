function destroyer(arr) {
    let array = arguments[0];
    let targets = [];
    Object.keys(arguments).map((key) => {
        if(key != '0'){
            targets.push(arguments[key]);
        }
    })
    
    
    return array.filter((item) => targets.indexOf(item) == -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
