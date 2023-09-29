import React from "react";
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
export function CrudTable({
  scoreCard,
  deleteData,
  putData,
  setUpdatedPlayer1Score,
  setUpdatedPlayer2Score,
  setUpdatedTieCount,
  updatedTieCount,
}) {
  //This component will call the getter function from the crud file and use it display user data.
  //Data in this table component can be deleted or updated but not created.
  //CrudForm component is responsible for creating the data which gets fed into this table.
  return (
    <Table bordered hover striped variant="success">
      <thead>
        <tr>
          <th>Score Cards</th>
          <th> </th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      {/* Using the .map() function, create a table row then 4 cells containing the data read by the crud function
            Data will be stuff that's read from the crud getData function
            Edit will be a button that changes the text into an editable textbox
            Delete will be a button that calls deleteData and removes the row from the table as well as from the database
            Play will be a button that takes u to the 'games' page and starts a game with the matching id as the row
            Make sure that the <tr> and </tr> are included in the mapping otherwise the table will not work*/}
      <tbody>
        {scoreCard.map((scoreCard, index) => (
          <tr key={index}>
            <td>
              Player 1's Wins:{" "}
              <FormControl
                type="number"
                defaultValue={scoreCard.player1Score}
                onChange={(e) => setUpdatedPlayer1Score(e.target.value)}
              />
              <br />
              Player 2's Wins:{" "}
              <FormControl
                type="number"
                defaultValue={scoreCard.player2Score}
                onChange={(e) => setUpdatedPlayer2Score(e.target.value)}
              />
              <br />
              Ties:{" "}
              <FormControl
                type="number"
                placeholder={scoreCard.ties}
                onChange={(e) => setUpdatedTieCount(e.target.value)}
              />
            </td>
            <td>
              <Button variant="danger" onClick={() => deleteData(scoreCard.id)}>
                Delete
              </Button>
            </td>
            <td>
              <Button variant="info" onClick={(e) => putData(e, scoreCard)}>
                Edit
              </Button>
            </td>
            <td>
              <Button variant="success">Play</Button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Data</td>
          <td>Edit</td>
          <td>Delete</td>
          <td>Play</td>
        </tr>
      </tbody>
      {console.log(scoreCard)}
    </Table>
  );
}
