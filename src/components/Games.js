import { useLocation, useOutletContext } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { RockPaperScissors } from "./RockPaperScissors";
import { TicTacToe } from "./TicTacToe";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  /* let gamedata = {
    Player1Wins: 0,
    Player2Wins: 0,
    Ties: 0,
  }; */

  /**
   * useLocation is a neat custom hook offered by React-Router.
   * By using the 'state' property inside a <Link> component, you can pass information to the history stack of a component
   * Which can then be read later by something along that route by calling useLocation().
   * So in this context, useLocation is getting the ID that matches with a scoreCard element.
   * This value will change whenever the user clicks on a 'play' button on the Crud Page's table.
   * However if the user accesses the Games page without going through the 'Crud' page, the state from useLocation is set to null.
   */
  let { state } = useLocation();
  console.log(state);

  let idText = state;
  const [gameID, setGameID] = useState(0);

  /**
   * The functionality for having the games record your scores and then map them over to the objects in the Crud page
   * has not been fully implemented.
   * This is a feature that *would* be cool to implement but would take longer to implement than to cut out.
   * So for now the games page can 'remember' what the 'Game ID' is, but there is nothing functional about it currently.
   * It would take a lot of refactoring and changes to pass down the necessary methods and stuff to both games and crud
   * which is out of the scope of what I feel comfortable doing right now.
   * I don't know how to utilize react's context feature and there is very little info about how to use the react-router's outletContext feature.
   */

  return (
    <>
      <Card>
        <Card.Header>Set your game ID to save scores!</Card.Header>
        <Card.Body>Current Game ID: {idText}</Card.Body>
        <Card.Footer>
          Set New ID:
          <input
            type="number"
            value={gameID}
            onChange={(e) => setGameID(e.target.value)}
          />
          <button type="submit">
            <Link to="/games" state={gameID}>
              Submit
            </Link>
          </button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          Welcome to the Games page! Here you can play TicTacToe or
          Rock-Paper-Scissors. Make sure to record your wins on the Crud page
          with a scoreCard item!
        </Card.Body>
      </Card>
      <RockPaperScissors />
      <hr />
      <TicTacToe />
    </>
  );
}
