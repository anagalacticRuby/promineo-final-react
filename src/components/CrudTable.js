import React from "react";
import Table from "react-bootstrap/Table";
import { ScoreCards } from "./ScoreCards";

export function CrudTable({ scoreCard, deleteData, putData }) {
  //This component will call the getter function from the crud file and use it display user data.
  //Data in this table component can be deleted or updated but not created.
  //CrudForm component is responsible for creating the data which gets fed into this table.

  // make a ScoreCard component and put state in there so its actually individual
  //const [individualCardP1Score ,setIndividualCardP1Score] = useState(null)

  return (
    <Table bordered hover striped variant="success">
      <thead>
        <tr>
          <th>Score Cards</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      {/* Using the .map() function, create a table row then 4 cells containing the data read by the crud function
            Data will be stuff that's read from the crud getData function
            Edit will be a button that changes the text into an editable textbox
            Delete will be a button that calls deleteData and removes the row from the table as well as from the database
            Play will be a button that takes u to the 'games' page and starts a game with the matching id as the row
            Make sure that the <tr> and </tr> are included in the mapping otherwise the table will not work*/}
      <tbody>
        {/**
         * Instead of mapping each row of the table and using the SAME scoreCard state object, instead each row is made with a ScoreCard component.
         * This component will have the putData and deleteData methods drilled into it since they are passed down from CrudPage to CrudTable,
         * and then finally passed down to Scorecard as props.
         * One more thing being passed into the ScoreCard component is a scoreCard object, which comes from CrudPage.
         * Each card is supposed to have its own values, and if every card calls from the exact same state object then edits made to anything
         * that calls that same state object will make edits to ALL things that render that state object.
         *
         */}
        {scoreCard.map((scoreCard, index) => (
          <ScoreCards
            key={index}
            scoreCard={scoreCard}
            putData={putData}
            deleteData={deleteData}
          />
        ))}
      </tbody>
      {console.log(scoreCard)}
    </Table>
  );
}
