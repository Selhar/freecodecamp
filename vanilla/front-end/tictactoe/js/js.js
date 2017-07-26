let board_state = [[0,0,0],
                    [0,0,0],
                    [0,0,0]];
const O = 0;
const X = 1;

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
    console.log(board_state);
}