
import { TicTacToe } from "./TicTacToe";
import { RockPaperScissors } from "./RockPaperScissors";

export function Games() {
  //This component houses the jsx for the 'games' page of the website.
  //It will import the TicTacToe and WarGame components.
  //Some ideas: Implement a bootstrap modal so only one game is visible and open at a time?
  //Or maybe each game is a 'child' of the game page

  //In a dream world try to find a way to get the winner of a game and store it into the crud table somehow?
  //Or maybe store the data into an array so scores are kept and able to be carried over between sessions on the site

  //Something like this? Find a way to pass this to both games as state somehow so scores are consistent.
  //Losses don't need to be tracked because every game has a winner and loser, 
  //so subtracting the wins from one player by the other gets you their losses
  let gamedata = {
    Player1Wins: 0,
    Player2Wins: 0,
    Ties: 0,
  };

  function findWinner(){
    
  }

  return (
    <>
      <RockPaperScissors/>
      <br />
      <TicTacToe />
    </>
  );
}