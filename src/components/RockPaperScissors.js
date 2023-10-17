import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export function RockPaperScissors({ gameData, updateScores }) {
  /**
   * References:
   * https://graphemica.com/ (for finding symbols to use via html encode)
   * https://www.w3schools.com/js/js_random.asp (for how to set up a random number generator)
   * https://www.geeksforgeeks.org/create-rock-paper-scissor-game-using-reactjs/ (for inspiration)
   * https://react-bootstrap.netlify.app/docs/components/buttons (react bootstrap styling)
   */
  //This component will house all the functionality and display elements for a game of Rock-Paper-Scissors
  //It will be displayed by the Games.js file

  /**
   * RPSBoard is the primary function that will set up a Table to house all the JSX that displays the game.
   * It will probably return something, idk.
   * @returns the winner's score?
   */
  function RPSBoard() {
    const [playerChoice, setPlayerChoice] = useState("none"); //playerChoice gets set to whatever button the player presses
    const [computerChoice, setComputerChoice] = useState(""); //computerChoice is chosen afterwards by a random number generator

    let battle; //This variable will change to display the 'battle' between player and computer.
    //Declare it now to enable changing it later.
    let outcome1, outcome2; //These variables will update to display the outcome of the battle.
    //Declare now to update later.
    let winner;

    /**
     * handleClick is called whenever a player clicks one of the three options in the RPS table
     * It will set the playerChoice state variable to whatever value is assigned to the button pressed
     * And then it will call generateComputerChoice to have the computer 'choose' what option to pick in response.
     * @param {*} buttonValue
     */
    function handleClick(buttonValue) {
      setPlayerChoice(buttonValue);
      setComputerChoice(generateComputerChoice());
    }

    /**
     * When the player clicks one of the buttons, this if-else block will determine what happens to the game board
     * It will display who is the winner of the 'battle', and the results of the battle.
     * At first, the player's choice is set to 'none' so that a tie is not declared by default.
     */
    if (playerChoice === "none") {
      //Initial game state
    } else if (playerChoice === computerChoice) {
      /**
       * Else if player and computer pick the same option
       * 1. Display 'Tie' as the outcome
       * 2. Show the battle result as player = computer
       */
      outcome1 = <b>Tie</b>;
      outcome2 = <b>Tie</b>;
      winner = <b style={{ color: "Gray" }}>Tie Game!</b>;
      battle = playerChoice + " = " + computerChoice;
      gameData.Ties++;
      updateScores(
        gameData,
        gameData.Player1Wins,
        gameData.Player2Wins,
        gameData.Ties,
        gameData.id
      );
      console.log(gameData);
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      /*
       * Else if player picks an option that beats the computer.
       * 1. Display winner as player, and loser as computer
       * 2. Show battle result as player > computer
       */
      outcome1 = <b>&lArr; Wins</b>;
      outcome2 = <b>Loses &rArr;</b>;
      winner = <b style={{ color: "blue" }}>Player 1 Wins!</b>;
      battle = playerChoice + " > " + computerChoice;
      gameData.Player1Wins++;
      updateScores(
        gameData,
        gameData.Player1Wins,
        gameData.Player2Wins,
        gameData.Ties,
        gameData.id
      );
    } else {
      /**
       * Otherwise the player has picked an option that loses to the computer.
       * 1. Display winner as computer, and loser as player
       * 2. Show battle result as computer < player
       */
      outcome1 = <b>&lArr; Loses</b>;
      outcome2 = <b>Wins &rArr;</b>;
      winner = <b style={{ color: "red" }}>Player 2 Wins!</b>;
      battle = playerChoice + " < " + computerChoice;
      gameData.Player2Wins++;
      updateScores(
        gameData,
        gameData.Player1Wins,
        gameData.Player2Wins,
        gameData.Ties,
        gameData.id
      );
    }

    function generateComputerChoice() {
      //This function should return a number between 0 and 2 (inclusive)
      //Then initialize that random number to a variable
      let rndNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      let computerChoice;

      //Based on what the random number variable is equal to, assign what the computer chooses
      if (rndNum === 0) {
        computerChoice = "Rock";
      } else if (rndNum === 1) {
        computerChoice = "Paper";
      } else {
        computerChoice = "Scissors";
      }
      console.log(computerChoice); //For debugging
      return computerChoice; //Return the value of whatever the computer's choice is
    }

    return (
      <>
        <Table
          variant="secondary"
          hover
          striped
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Rock-Paper-Scissors</th>
              <th></th>
              <th>{winner}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="humanUpLeft">
                <Button variant="info" onClick={() => handleClick("Rock")}>
                  Rock
                </Button>
              </td>
              <td id="boardUpCenter">{outcome1}</td>
              <td id="computerUpRight">
                <Button variant="danger" disabled>
                  Rock
                </Button>
              </td>
            </tr>
            <tr>
              <td id="humanMiddleLeft">
                <Button variant="info" onClick={() => handleClick("Paper")}>
                  Paper
                </Button>
              </td>
              <td id="boardMiddleCenter">{battle}</td>
              <td id="computerMiddleRight">
                <Button variant="danger" disabled>
                  Paper
                </Button>
              </td>
            </tr>
            <tr>
              <td id="humanLowLeft">
                <Button variant="info" onClick={() => handleClick("Scissors")}>
                  Scissors
                </Button>
              </td>

              <td id="boardLowCenter">{outcome2}</td>
              <td id="computerLowRight">
                <Button variant="danger" disabled>
                  Scissors
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }

  return <RPSBoard />;
}
