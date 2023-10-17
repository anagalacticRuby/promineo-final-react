import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState } from "react";
export function TicTacToe({ gameData, updateScores }) {
  let turnCount = 0; //Keeps track of scores, declared up top so everyone can access it
  //This component will house the jsx responsible for creating and playing tictactoe games
  //The 'Games' component will import this component

  /* References: 
  https://react.dev/learn/tutorial-tic-tac-toe (used to create the Tic-Tac-Toe board + its functionality)
  https://legacy.reactjs.org/docs/hooks-state.html (for more information about hooks)
  https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
  https://react-bootstrap.netlify.app/docs/components/table/ (for information on how to style tables with react-bootstrap) */

  /**
   * This functional component houses the event handler for each individual table cell of the Tic-Tac-Toe board
   * It takes in the 'value' of the cell and a function passed down from the parent component which is the GameBoard function
   */
  function GameCell({ value, onCellClick }) {
    return (
      <Button variant="success" className="gameCell" onClick={onCellClick}>
        {value}
      </Button>
    );
  }

  /*
   * This functional component will render the game board for Tic-Tac-Toe games
   * And it will pass event handlers down to each table cell to handle what happens when a player clicks any cell within the table
   * It is the parent of GameCell, so that it can pass down event handlers and values down as props.
   */
  function GameBoard() {
    //Count turns to be able to tell when ties happen

    const [xIsNext, setXIsNext] = useState(true); //X will always have the first move initially
    const [gameCells, setCells] = useState(Array(9).fill(null)); //set up the state array for values of cells in the table

    /**
     * resetGame is a function that resets the game board, and starts a new game with the opposite player going first.
     */
    function resetGame() {
      setCells(Array(9).fill(null)); //set all cells to a new array of null values
      //This will force a re-render of the table, and start a new game that starts with the next player's turn.
      //By making the reset button flip turns we can prevent X from always getting first move.
      if (!xIsNext) {
        setXIsNext(true);
      } else {
        setXIsNext(false);
      }
      // console.log(gameCells); //Used for debugging
    }

    /*
     * handleClick is an event handler that fires upon a player clicking one of the GameCell components.
     * It takes in 'i' as a parameter, which is the 'number' of the game cell.
     * By using 'i' the function does not need a hard coded value and will know what cell is clicked because each cell has a unique number.
     */
    function handleClick(i) {
      if (gameCells[i] || determineWinner(gameCells)) {
        return; //If the cell is already filled, return early so the value isn't overwritten.
      }
      const nextCells = gameCells.slice();
      if (xIsNext) {
        nextCells[i] = "X"; //If X's turn, fill cell with X
      } else {
        nextCells[i] = "O"; //Else (meaning O's turn), fill cell with O
      }
      setCells(nextCells); //Set the state value using the callback function defined at the top level of this function
      setXIsNext(!xIsNext); //After updating the value displayed in that cell, update who's turn it is
      turnCount = turnCount + 1;
    }

    const winner = determineWinner(gameCells);
    let status;
    if (winner) {
      if (winner === "X") {
        status = "Winner: Player 1! (X)"; //When a winner is found, display who's the winner!
        gameData.Player1Wins++;
        updateScores(
          gameData,
          gameData.Player1Wins,
          gameData.Player2Wins,
          gameData.Ties,
          gameData.id
        );
      } else if (winner === "O") {
        status = "Winner: Player 2! (O)"; //Display who's a winner when there is one!
        gameData.Player2Wins++;
        updateScores(
          gameData,
          gameData.Player1Wins,
          gameData.Player2Wins,
          gameData.Ties,
          gameData.id
        );
      }
      /**
       * Add Code Here to update a player's score card
       */
    } else if (turnCount < 9) {
      status = "Next player: " + (xIsNext ? "X" : "O"); //Otherwise display who's turn is next
      // console.log(turnCount); Used for debugging to make sure turnCount updates properly
    } else {
      status = "Tie Game!";
      gameData.Ties++;
      updateScores(
        gameData,
        gameData.Player1Wins,
        gameData.Player2Wins,
        gameData.Ties,
        gameData.id
      );
    }
    /**
     * Add Code Here in event of tie
     */
    //When the game is a tie, we need to add code here that displays a tie and stops the game.

    return (
      <>
        <Table
          variant="dark"
          striped
          bordered
          hover
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr className="header-row">
              <th>{status}</th>
              <th>TicTacToe</th>
              <th>
                <Button onClick={resetGame} variant="danger">
                  Reset
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="board-row">
              <td>
                <GameCell
                  value={gameCells[0]}
                  onCellClick={() => handleClick(0)}
                />
              </td>
              <td>
                <GameCell
                  value={gameCells[1]}
                  onCellClick={() => handleClick(1)}
                />
              </td>
              <td>
                <GameCell
                  value={gameCells[2]}
                  onCellClick={() => handleClick(2)}
                />
              </td>
            </tr>
            <tr className="board-row">
              <td>
                <GameCell
                  value={gameCells[3]}
                  onCellClick={() => handleClick(3)}
                />
              </td>
              <td>
                <GameCell
                  value={gameCells[4]}
                  onCellClick={() => handleClick(4)}
                />
              </td>
              <td>
                <GameCell
                  value={gameCells[5]}
                  onCellClick={() => handleClick(5)}
                />
              </td>
            </tr>
            <tr className="board-row">
              <td>
                <GameCell
                  value={gameCells[6]}
                  onCellClick={() => handleClick(6)}
                />
              </td>
              <td>
                <GameCell
                  value={gameCells[7]}
                  onCellClick={() => handleClick(7)}
                />
              </td>
              <td>
                <GameCell
                  value={gameCells[8]}
                  onCellClick={() => handleClick(8)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }

  function determineWinner(gameCells) {
    const winStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ]; //When these lines of cells are filled with the same value, a winner should be declared!
    //Note the numbers correlate to the cell 'number' on the Tic-Tac-Toe board.

    for (let i = 0; i < winStates.length; i++) {
      const [a, b, c] = winStates[i];
      if (
        gameCells[a] &&
        gameCells[a] === gameCells[b] &&
        gameCells[a] === gameCells[c]
      ) {
        return gameCells[a];
      }
    }
  }
  return <GameBoard />;
}
