import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";

export function CrudPage() {
  /**
   * This component is the parent component of all crud-related components.
   * As such it will be responsible for passing down state to the CrudForm and CrudTable components.
   * The purpose of CrudPage is to house all the jsx necessary to display a webpage that will allow for CRUD operations.
   * In a magic world somehow i would try to make it so 'games' are created and then scores from the 'games' page will update data on this page.
   */

  const ENDPOINT =
    "https://638959874eccb986e8905258.mockapi.io/CrudAPI/FinalSite"; //Endpoint for website
  const [scoreCard, setScoreCard] = useState([{}]);

  //Variables used for post method
  const [newPlayer1Score, setNewPlayer1Score] = useState(0);
  const [newPlayer2Score, setNewPlayer2Score] = useState(0);
  const [newTieCount, setNewTieCount] = useState(0);

  function getData() {
    fetch(ENDPOINT)
      .then((data) => data.json())
      .then((data) => setScoreCard(data));
  }

  useEffect(() => {
    getData();
    console.log(scoreCard);
  }, []);

  function deleteData(id) {
    fetch(`${ENDPOINT}/${id}`, {
      method: "DELETE",
    })
      .then(() => getData())
      .then(() => alert("Score Card Deleted"));
  }
  function postData(e) {
    e.preventDefault();
    console.log(newPlayer1Score, newPlayer2Score, newTieCount);

    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player1Score: newPlayer1Score,
        player2Score: newPlayer2Score,
        ties: newTieCount,
      }),
    })
      .then(() => getData())
      .then(() => alert("Score Card Created"));
  }

  function putData(e, initialScoreCard, p1Score, p2Score, ties) {
    e.preventDefault();

    let updatedScoreCardObj = {
      ...initialScoreCard,
      player1Score: p1Score,
      player2Score: p2Score,
      ties: ties,
    };

    fetch(`${ENDPOINT}/${updatedScoreCardObj.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedScoreCardObj),
    })
      .then(() => getData())
      .then(() => alert("Score Card Updated"));
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card text="white" bg="primary">
              <CardHeader>Page Description</CardHeader>
              <Card.Body>
                <Card.Text>
                  Hi! This page of the website is designed for CRUD operations.
                  CRUD stands for Create Read Update Delete, and they are very
                  common operations especially when it comes to things like a
                  database. To use this page of the website, you can first
                  create a score card item to keep track of scores in the games
                  page of the site. Once you press the 'Create Card' button, the
                  card will be added to the database and the table will get
                  updated. All new cards are added to the bottom of the table.
                  From there, cards can be edited individually, and there's also
                  a button to delete cards. The 'Play' button will direct you to
                  the Games page, where you can play more games to add to your
                  score.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <CrudForm
              postData={postData}
              setNewPlayer1Score={setNewPlayer1Score}
              setNewPlayer2Score={setNewPlayer2Score}
              setNewTieCount={setNewTieCount}
              newPlayer1Score={newPlayer1Score}
              newPlayer2Score={newPlayer2Score}
              newTieCount={newTieCount}
            />
          </Col>
        </Row>
      </Container>
      <CrudTable
        scoreCard={scoreCard}
        deleteData={deleteData}
        putData={putData}
      />
    </>
  );
}
