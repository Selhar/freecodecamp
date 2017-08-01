let GAME_STATE = [[0,0,0],
                  [0,0,0],
                  [0,0,0]];

let MACHINE = {symbol: "", value: 2};
let PLAYER = {symbol: "", value: 1};

// assigns the choosen symbol to the human_horizontal player,
// the other symbol automatically goes to the machine.
// after assignment, the DOM transitions into the game.
function assign_symbol(id){
  PLAYER.symbol = id;
  MACHINE.symbol = id = "X" ? "O" : "X";

  let game_elements = document.getElementsByClassName("hidden");
  let assign_screen = document.getElementsByClassName("options");
  assign_screen[0].style.display = "none";

  for(i = 0; i < game_elements.length; i++){
      game_elements[i].style.display = "block";
  }
}

// Receives user input, updates GAME_STATE and the DOM, then makes the machine's move
function manage_game(id){
  game_action(id, PLAYER);
  enemy_movement();

  let game_status = game_over();
  if(game_status){
    let winner_div = document.getElementById("winner");
    winner_div.innerHTML = game_status;
  }
}

// based on tile ID, updates the internal board
// and draws the user's choice on the DOM
function game_action(id, user) {
  let board_coordinate = id_to_coordinate(id);
  let is_tile_empty = GAME_STATE[board_coordinate[0]][board_coordinate[1]]
  
  if(is_tile_empty === 0){
    GAME_STATE[board_coordinate[0]][board_coordinate[1]] = user.value;
    draw_node_to_DOM();  
  }
  
  // receives a tile ID and returns it's coordinate equivalent
  function id_to_coordinate() {
    let offset_id = id-1;
    let row = Math.floor(offset_id / 3);
    let column = offset_id % 3;
    return [row, column];
  }

  // Uses coordinates to update the DOM representation of GAME_STATE
  function draw_node_to_DOM() {
    let element = document.getElementById(id);
    element.innerHTML = user.symbol;
  }
}

function enemy_movement() {
  if(fetch_valid_tile()){
    game_action(fetch_valid_tile(), MACHINE);
  }

  // Looks through the board for a valid tile and returns it's ID
  // currently, "valid tile" only implies in an empty tile. 
  function fetch_valid_tile() {
    let valid_tile;

    for(let i = 0; i < GAME_STATE.length; i++){
      valid_tile = false;
      for(let j = 0; j < GAME_STATE.length; j++){
        if(GAME_STATE[i][j] == 0){
          valid_tile = {row: i, column: j};
          break;
        }
      }
      if(valid_tile !== false){
        break;
      }
    }

    // turns a column/row coordinate into a valid tile ID
    function coordinate_to_id(coordinate) {
      let id = ((coordinate.row * 3) + coordinate.column) + 1;
      return id;
    }

    return valid_tile ? coordinate_to_id(valid_tile) : null;
  }
}

// analyses GAME_STATE to find out if the match is over
// currently it does not look for a locked game
function game_over(){
  let winner = is_game_won() || is_the_board_full();
  return winner;
  //If there are no more empty spaces, the game is over
  function is_the_board_full() {
    let is_game_over;
    for(let i = 0; i < GAME_STATE.length; i++){
      for(let j = 0; j < GAME_STATE.length; j++){
        if(GAME_STATE[i][j] == 0){
          return false;
        }
        if(i == GAME_STATE.length-1 && j == GAME_STATE.length-1 && is_game_over === undefined){
          return "Draw";
        }
      }
    }
  }
  // analyses if someone won the game yet
  function is_game_won(){
    let human_horizontal;
    let human_vertical;
    let computer_horizontal;
    let computer_vertical;

    for(i = 0; i < GAME_STATE.length; i++){
      human_horizontal = 0;
      human_vertical = 0;
      computer_horizontal = 0;
      computer_vertical = 0;
      for(j = 0; j < GAME_STATE.length; j++){
        if(GAME_STATE[i][j] == PLAYER.value){
          human_horizontal++;
        }else if(GAME_STATE[i][j] == MACHINE.value){
          computer_horizontal++;
        }
        if(GAME_STATE[j][i] == PLAYER.value){
          human_vertical++;
        }else if (GAME_STATE[j][i] == MACHINE.value){
          computer_vertical++;
        }
      }
      if(human_horizontal == 3 || human_vertical == 3){
        return "Human";
      }else if (computer_horizontal == 3 || computer_vertical == 3){
        return "Computer";
      }
    }
  }
}

//Resets the game state and re-draws the DOM
function reset_game(){
  GAME_STATE = [[0,0,0],
                [0,0,0],
                [0,0,0]];

  let nodes = document.getElementsByClassName("node");
  let winner_div = document.getElementById("winner");

  for(let i = 0; i < nodes.length; i++){
    nodes[i].innerHTML = "";
  }

  winner_div.innerHTML = "???";  
}