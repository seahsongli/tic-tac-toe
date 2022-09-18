const gameBoard = (() =>{
    let boardArray = ["","","","","","","","",""];
    let cells = Array.from(document.querySelectorAll(".cell"));
    const render = ()=> {
        for(i=0;i<boardArray.length;i++){
            cells[i].innerHTML = boardArray[i];
        }
    }

    const winCondition = (player) => {
        // let indexArray = [];
        // for (i=0;i<boardArray.length;i++){
        //     indexArray.push(i);
        // }
        const horizontal = [0,3,6].map(i=>{return[i,i+1,i+2]});
        const vertical = [0,1,2].map(i=>{return[i,i+3,i+6]});
        const diagonal = [[0,4,8],[2,4,6]];
      
        var allwins = [].concat(horizontal).concat(vertical).concat(diagonal);
        
        let res = allwins.some(indices => { 
        return (boardArray[indices[0]] == `${currentPlayer.marker}` && boardArray[indices[1]] == `${currentPlayer.marker}` && 
        boardArray[indices[2]] == `${currentPlayer.marker}`)}) 
        return res;
    }
    return {boardArray,cells,render, winCondition};
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
    const playerSelection = cells.forEach((cell) => cell.addEventListener("click", function(e) {
        let index = gameBoard.boardArray.indexOf.call(cells,e.target);
        if (e.target.innerHTML==="") {
            if(currentPlayer === playerOne){
                currentPlayer = playerTwo;
                e.target.innerHTML = `${currentPlayer.marker}`;
                gameBoard.boardArray[index] = `${currentPlayer.marker}`;
            }
            else if (currentPlayer === playerTwo){
                currentPlayer = playerOne;
                e.target.innerHTML = `${currentPlayer.marker}`;
                gameBoard.boardArray[index] = `${currentPlayer.marker}`;
            }
            if(gameBoard.winCondition(currentPlayer) === true) {
                alert(`${currentPlayer.name} has won!`);
            };
        }
        return null;
    }))

    return {playerSelection, name , marker}
});


const playerOne = Player("Player One", "O");
const playerTwo = Player("Player Two", "X");
var currentPlayer = playerTwo;
gameBoard.render();