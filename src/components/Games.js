import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link, useLocation } from "react-router-dom";
import { RockPaperScissors } from "./RockPaperScissors";
import { TicTacToe } from "./TicTacToe";
import { Accordion } from "react-bootstrap";

export function Games() {
  const ENDPOINT =
    "https://638959874eccb986e8905258.mockapi.io/CrudAPI/FinalSite"; //Endpoint for website

  //This component houses the jsx for the 'games' page of the website.
  //It will import the TicTacToe and RockPaperScissors components.
  //Some ideas: Implement a bootstrap modal so only one game is visible and open at a time?
  //Or maybe each game is a 'child' of the game page

  /**
   * useLocation is a neat custom hook offered by React-Router.
   * By using the 'state' property inside a <Link> component, you can pass information to the history stack of a component
   * Which can then be read later by something along that route by calling useLocation().
   * So in this context, useLocation is getting the ID that matches with a scoreCard element.
   * This value will change whenever the user clicks on a 'play' button on the Crud Page's table.
   * However if the user accesses the Games page without going through the 'Crud' page, the state from useLocation is set to null.
   * Reference: https://reactrouter.com/en/main/hooks/use-location
   */

  let idText = ""; //This lets the user know what scoreCard is being displayed on the screen currently.
  let { state } = useLocation();
  // console.log("Line 34, printing state:" + state); Used for debugging to make sure the state gets set right.
  if (state != null) {
    console.log(state);
    idText = state; //When the user navigates to this page through the CrudTable component, the state gets set to a value
    //Additionally the state from Location gets set when the user manually sets their ID on this page.
  } else {
    /* If the user navigates to this page manually, the state from location is set to null
    This makes sense since the 'location' hasn't been set yet, and defaults to null
    Location must be set by a location object, which usually gets set by a Link component. 
    Reference: https://reactrouter.com/en/main/components/link#state */
    idText = 1;
  }

  const [gameID, setGameID] = useState(0); //Defaults to 0 so React doesn't throw errors for a null value changing to a non-null one
  const [scoreCard, setScoreCard] = useState([{}]);
  // console.log("line 46, printing gameID:" + gameID); Used for making sure gameID updates properly

  /**
   * this Effect will make the page 'open' with values if useLocation returns a value.
   * otherwise it will default to showing the scores saved in the scoreCard with an ID of 1.
   * while hooks and effects can't be used inside loops or conditonals, there isn't anything from stopping us from adding a conditional
   * INSIDE of the hook.
   * the gameID is set after the data is fetched so that way values update properly
   * whenever a player wins or ties a game.
   */
  useEffect(() => {
    if (state != null) {
      fetch(`${ENDPOINT}/${state}`)
        .then((data) => data.json())
        .then((data) => setScoreCard(data));
      setGameID(state);
    } else {
      fetch(`${ENDPOINT}/${1}`)
        .then((data) => data.json())
        .then((data) => setScoreCard(data));
      setGameID(1);
    }
  }, []);

  /**
   * updateScores is similar to putData from CrudPage.js, but has a few differences.
   * This function doesn't take an event to prevent default actions
   * And it also takes an extra parameter, 'id', to make sure the right scoreCard gets updated.
   * The really neat part is that wins from games update scoreCards in real time, and the user can confirm this
   * By going to the CRUD page and viewing the table.
   * updateScores is in this component so it can be passed down as props to the respective game components
   * @param {*} initialScoreCard the initial values from the current scoreCard
   * @param {*} p1Score player 1's win count
   * @param {*} p2Score player 2's win count
   * @param {*} ties tie count
   * @param {*} id id of the associated scoreCard
   */
  function updateScores(initialScoreCard, p1Score, p2Score, ties, id) {
    let updatedScoreCardObj = {
      ...initialScoreCard, //spread to make sure previous values aren't overwritten, used mostly to keep ids from overwriting
      player1Score: p1Score,
      player2Score: p2Score,
      ties: ties,
    };

    fetch(`${ENDPOINT}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedScoreCardObj),
    })
      .then(() => {
        fetch(`${ENDPOINT}/${gameID}`)
          .then((data) => data.json())
          .then((data) => setScoreCard(data));
      })
      .then(() => alert("Score Card Updated")); //Let the user know the scores have been updated
    //Closing the alert also re-renders the page so game boards are reset to their default values.
  }

  let gameData = {
    Player1Wins: scoreCard.player1Score,
    Player2Wins: scoreCard.player2Score,
    Ties: scoreCard.ties,
    id: scoreCard.id,
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card text="white" bg="secondary" border="success">
              <Card.Header>Set your game ID to save scores!</Card.Header>
              <Card.Body>Current Game ID: {idText}</Card.Body>
              <Card.Footer>
                Set Game ID (Also gets scores)<br/>
                <input
                  type="number"
                  value={gameID}
                  name="gameID"
                  onChange={(e) => setGameID(e.target.value)}
                />
                <Link
                  to="/games"
                  state={gameID}
                  onClick={() => {
                    fetch(`${ENDPOINT}/${gameID}`)
                      .then((data) => data.json())
                      .then((data) => setScoreCard(data));
                  }}
                >
                  <button>Go</button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card text="dark" bg="info" border="danger">
              <Card.Header>Scores for ID: {gameData.id}</Card.Header>
              <Card.Body>
                Player 1:{gameData.Player1Wins}
                <br />
                Player 2: {gameData.Player2Wins}
                <br />
                Ties: {gameData.Ties}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card style={{ backgroundColor: "lightgreen", color: "black" }}>
            <Card.Body>
              Welcome to the Games page! Here you can play TicTacToe or
              Rock-Paper-Scissors. Whenever a winner is declared in either game,
              the scores will update automatically! This change is also
              reflected in the 'Crud' page, matching with the scoreCard's id
              being shown currently on this page.
            </Card.Body>
          </Card>
        </Row>
      </Container>

      <Accordion flush defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Rock Paper Scissors</Accordion.Header>
          <Accordion.Body> <RockPaperScissors gameData={gameData} updateScores={updateScores} /></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Tic Tac Toe</Accordion.Header>
          <Accordion.Body><TicTacToe gameData={gameData} updateScores={updateScores} /></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
