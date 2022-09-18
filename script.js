const gameBoard = (() =>{
    let boardArray = ["","","","","","","","",""];
    let cells = Array.from(document.querySelectorAll(".cell"));
    const render = ()=> {
        for(i=0;i<boardArray.length;i++){
            cells[i].innerHTML = boardArray[i];
        }
    }

    // To check if a player has won
    const winCondition = (currentPlayer) => {
        const horizontal = [0,3,6].map(i=>{return[i,i+1,i+2]});
        const vertical = [0,1,2].map(i=>{return[i,i+3,i+6]});
        const diagonal = [[0,4,8],[2,4,6]];
      
        var allwins = [].concat(horizontal).concat(vertical).concat(diagonal);
        
        let res = allwins.some(indices => { 
        return (boardArray[indices[0]] == `${currentPlayer.marker}` && boardArray[indices[1]] == `${currentPlayer.marker}` && 
        boardArray[indices[2]] == `${currentPlayer.marker}`)}) 
        return res;
    }

    //Reset button
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", ()=> {
        for(i=0;i<boardArray.length;i++){
            boardArray[i] = "";
        }
        render();
    })
    return {boardArray,cells,render, winCondition, resetButton};
})();


const Player = ((name, marker)=>{
    this.name = name;
    this.marker = marker;

    //For each of the cell, we add an event listener where if you click, and the cell is empty, you add the marker to cell.
    let cells = Array.from(document.querySelectorAll(".cell"));
    const playerSelection = cells.forEach((cell) => cell.addEventListener("click", function(e) {
        let index = gameBoard.boardArray.indexOf.call(cells,e.target);
        if (e.target.innerHTML==="") {
            //To alternate between the two players.
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

            //Check and alert which player has won.
            if(gameBoard.winCondition(currentPlayer) === true) {
                alert(`${currentPlayer.name} has won!`);
            }

            else if (gameBoard.winCondition(currentPlayer) === false && 
            gameBoard.boardArray.filter(element => element !== "").length === gameBoard.boardArray.length){
                alert("Tie");
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