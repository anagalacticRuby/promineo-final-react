import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
export function CrudForm({
  newPlayer1Score,
  newPlayer2Score,
  newTieCount,
  setNewPlayer1Score,
  setNewPlayer2Score,
  setNewTieCount,
  postData,
}) {
  //This component will import all of the crud functions defined in the crud component
  //Then use those functions to create a form

  //Maybe put the form into a static backdrop modal? So that way it is placed 'over' the rest of the content
  //And users can 'cancel' the form when necessary.

  return (
    <>
      <Card text="white" bg="primary" border="secondary">
        <CardHeader>Create New Score Card</CardHeader>
        <Card.Body>
          <Form>
            <Row>
              <FormLabel>
                Player 1 Score
                <FormControl
                  type="number"
                  placeholder="Player 1 Score"
                  name="player1Score"
                  value={newPlayer1Score}
                  onChange={(e) => setNewPlayer1Score(e.target.value)}
                />
              </FormLabel>
            </Row>
            <Row>
              <FormLabel>
                Player 2 Score
                <FormControl
                  type="number"
                  placeholder="Player 2 Score"
                  name="player2Score"
                  value={newPlayer2Score}
                  onChange={(e) => setNewPlayer2Score(e.target.value)}
                />
              </FormLabel>
            </Row>
            <Row>
              <FormLabel>
                Tie Count
                <FormControl
                  type="number"
                  placeholder="Tie Count"
                  name="ties"
                  value={newTieCount}
                  onChange={(e) => setNewTieCount(e.target.value)}
                />
              </FormLabel>
            </Row>
            <Row>
              <Button variant="info" onClick={(e) => postData(e)}>
                Create Card
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
