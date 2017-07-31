let GAME_STATE = [[0,0,0],
                  [0,0,0],
                  [0,0,0]];

let MACHINE = {symbol: "", value: 2};
let PLAYER = {symbol: "", value: 1};

// assigns the choosen symbol to the human player,
// the other symbol automatically goes to the machine.
// after assignment, the DOM transitions into the game.
function assign_symbol(id){
  PLAYER.symbol = id;
  MACHINE.symbol = id = "X" ? "X" : "O";

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
  analyse_valid_tile();

  // turns a column/row coordinate into a valid tile ID

  function coordinate_to_id() {
    
  }
  // Looks through the board for a valid tile and returns it's ID
  // "valid tile" means that the slot is empty and it's row or column 
  // has not yet been used by the opponent.
  function analyse_valid_tile() {
    let is_row_valid = true;
    let valid_tile = false;
    for(let i = 0; i < GAME_STATE.length; i++){
      for(let j = 0; j < GAME_STATE.length; j++){
        if(GAME_STATE[i][j] == PLAYER.value){
          is_row_valid = false;
          break;
        }
        if(GAME_STATE[i][j] == 0){
          valid_tile = {column: i, row: j};
        }
      }
      if(is_row_valid && valid_tile !== false){
        break;
      }
    }
    return valid_tile_ID;
  }
}

function update_game_state(id){
  
}