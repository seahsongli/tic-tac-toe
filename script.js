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
    const playerSelection = (board,cell) => {
        const index = board.cells.findIndex(position => position === cell);  
        if (board.cells.boardArray[index] === "") {
            board.render();
            return index;
        }
        return null;
    }

    return {playerSelection, name , marker}
});

const playerOne = Player("john", "circle");
const playerTwo = Player("Sam", "cross");