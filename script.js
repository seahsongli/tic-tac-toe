const gameBoard = (() =>{
    let boardArray = ["x","x","x","","x","x","","","" ];
    let cells = Array.from(document.querySelectorAll(".cell"));
    const render = ()=> {
        for(i=0;i<boardArray.length;i++){
            cells[i].innerHTML = boardArray[i];
        }
    }
    return {boardArray,cells,render};
})();


const Player = ((name, marker)=>{
    this.name = name;
    this.marker = marker;
    // const playerSelection = (board,cell) => {
    //     const index = board.cells.findIndex(position => position === cell);  
    //     if (board.cells.boardArray[index] === "") {
    //         board.render();
    //         return index;
    //     }
    //     return null;
    // }

    //for each of the cell, we add an event listener where if you click, and the cell is empty, you add the marker to cell.

    let cells = Array.from(document.querySelectorAll(".cell"));
    const playerSelection = cells.forEach((cell) => cell.addEventListener("click", (e)=> {
        if (e.target.innerHTML==="") {
            if(currentPlayer === playerOne){
                currentPlayer = playerTwo;
                e.target.innerHTML = `${currentPlayer.marker}`;
            }
            else if (currentPlayer === playerTwo){
                currentPlayer = playerOne;
                e.target.innerHTML = `${currentPlayer.marker}` 
            }
        }
        return null;
    }))

    return {playerSelection, name , marker}
});


const playerOne = Player("john", "circle");
const playerTwo = Player("john", "cross");
var currentPlayer = playerTwo;
gameBoard.render();