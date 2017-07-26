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
        console.log("not won");
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
    if(board_state[0][0] + board_state[0][1] + board_state[0][2] % 3 == 0 ||
       board_state[1][0] + board_state[1][1] + board_state[1][2] % 3 == 0 ||
       board_state[2][0] + board_state[2][1] + board_state[2][2] % 3 == 0 ||
       board_state[0][1] + board_state[0][1] + board_state[0][1] % 3 == 0 ||
       board_state[1][1] + board_state[1][1] + board_state[1][1] % 3 == 0 ||
       board_state[2][1] + board_state[2][1] + board_state[2][1] % 3 == 0 ||
       board_state[0][0] + board_state[1][1] + board_state[2][2] % 3 == 0 ||
       board_state[0][2] + board_state[1][1] + board_state[2][0] % 3 == 0){
           return true;
       }
    return false;
}