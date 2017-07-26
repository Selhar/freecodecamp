const O = 1;
const X = 2;
let move_count = 0;

let board_state = [[0,0,0],
                   [0,0,0],
                   [0,0,0]];

function manage_game(id){
    
    process_move(id);
    move_count++;

    if(move_count >= 3 && is_won()){
        console.log("won");
    }else{
        console.log(board_state);
    }
}

function process_move(id) {
    let position_1;
    let position_2;

    if(id <= 3){
        position_1 = 0;
        position_2 = id-1;
    }else if(id <=6){
        position_1 = 1;
        position_2 = id % 3;
    }else{
        position_1 = 2;
        position_2 = id % 3;
    }

    board_state[position_1][position_2] = X;
}

function is_won(){
    //The sum of a winning move is always 3 or 6, according to X and O's value.
    //The sum of a losing move is always modulus > 0

    let position_1 = 0;
    let position_2 = 0;
    let sum = 0;
    let i = 0;
    let j = 0;

    //Horizontal verification
    for(i = 0; i<board_state.length; i++){
        sum = 0;
        for(j = 0; j<board_state.length; j++){
            sum += board_state[i][j];
        }
        if(sum > 0 && sum % 3 == 0)
            break;
    }
    console.log(sum);
    if(sum > 0 && sum % 3 == 0){
        return true;
    }
    
    return false;
}