const O = 1;
const X = 2;
let player;
let machine;
let turn = 0;

let board_state = [[0,0,0],
                   [0,0,0],
                   [0,0,0]];

function manage_game(id){
  process_move(id, "X");
  enemy_move();
  turn++;
    
  if(turn >= 3 && is_won()){
  //  console.log(is_won());
  }
}

function enemy_move(){
  let isRowValid = true;
  let validPosition = [];

  for(let i = 0; i<board_state.length; i++){
    for(let j = 0; j<board_state.length; j++){
      if(board_state[i][j] == player){
        isRowValid = false;
        break;
      }else if(board_state[i][j] == 0){
        validPosition = [i,j];
      }
    }
    if(isRowValid){
      let valid_id = (validPosition[0] * 3) + validPosition[1] +1; 
      process_move(valid_id, "O");
      break;
    }
  }

  for(let i = 0; i<board_state.length; i++){
    for(let j = 0; j<board_state.length; j++){
      if(board_state[j][i] == player){
        isRowValid = false;
        break;
      }else if(board_state[j][i] == 0){
        validPosition = [j,i];
      }
    }
    if(isRowValid){
      let valid_id = (validPosition[0] * 3) + validPosition[1] +1; 
      process_move(valid_id, "O");
      break;
    }
  }
}

function process_move(id, symbol) {
  let position_1;
  let position_2;

  if(id <= 3){
      position_1 = 0;
      position_2 = id-1;
  }else if(id <= 6){
      position_1 = 1;
      position_2 = Math.floor((id-1) % 3);
  }else{
      position_1 = 2;
      position_2 = Math.floor((id-1) % 3);
  }
  board_state[position_1][position_2] = symbol;
  fill_node(id, symbol);
}

function fill_node(id, symbol){
  let node = document.getElementById(id);

  node.innerHTML = symbol;
}

function is_won(){
  //The sum of a winning move is always 3 or 6, according to X and O's value.
  //The sum of a losing move is always modulus > 0

  let position_1 = 0;
  let position_2 = 0;
  let sum = 0;
  let i = 0;
  let j = 0;
  let game_over = false;

  //Horizontal verification
  for(i = 0; i<board_state.length; i++){
      sum = 0;
      for(j = 0; j<board_state.length; j++){
          sum += board_state[i][j];
      }
      if(sum > 0 && sum % 3 == 0){
          game_over = true;
          break;
      }
  }

  if(!game_over){
  //Vertical verification
      for(i = 0; i<board_state.length; i++){
          sum = 0;
          for(j = 0; j<board_state.length; j++){
              sum += board_state[j][i];
          }
          if(sum > 0 && sum % 3 == 0){
              game_over = true;
              break;
          }
      }
  }

  if(!game_over){
  //Right side diagonal verification
      i = 0;
      j = 0;
      sum = 0;
      
      while(i <= 2){
          sum += board_state[i][j];
          i++;
          j++;
      }

      if(sum > 0 && sum % 3 == 0){
          game_over = true;
      }
  }

  if(!game_over){
  //Left side diagonal verification
      i = 0;
      j = 2;
      sum = 0;
          
      while(i <= 2){
          sum += board_state[i][j];
          i++;
          j--;
      }
      if(sum > 0 && sum % 3 == 0){
          game_over = true;
      }

  }
  return game_over ? sum : false;
}

function choose_symbol(choice){
  player = choice == "X" ? 2 : 1;
  machine = choice == "X" ? 1 : 2;

  let hidden = document.getElementsByClassName("hidden");
  let options = document.getElementsByClassName("options");
  options[0].style.display = "none";

  for(i = 0; i < hidden.length; i++){
      hidden[i].style.display = "block";
  }
}