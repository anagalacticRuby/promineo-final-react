import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

export function ScoreCards({ scoreCard, putData, deleteData }) {
  //Variables used for the update method
  const [updatedPlayer1Score, setUpdatedPlayer1Score] = useState(0);
  const [updatedPlayer2Score, setUpdatedPlayer2Score] = useState(0);
  const [updatedTieCount, setUpdatedTieCount] = useState(0);

  return (
    <tr>
      <td>
        Player 1's Wins:{" "}
        <FormControl
          type="number"
          defaultValue={scoreCard.player1Score}
          name="Player1Wins"
          onChange={(e) => setUpdatedPlayer1Score(e.target.value)}
        />
        <br />
        Player 2's Wins:{" "}
        <FormControl
          type="number"
          defaultValue={scoreCard.player2Score}
          name="Player2Wins"
          onChange={(e) => setUpdatedPlayer2Score(e.target.value)}
        />
        <br />
        Ties:{" "}
        <FormControl
          type="number"
          defaultValue={scoreCard.ties}
          name="TieCount"
          onChange={(e) => setUpdatedTieCount(e.target.value)}
        />
      </td>
      <td>
        <Button variant="danger" onClick={() => deleteData(scoreCard.id)}>
          Delete
        </Button>
      </td>
      <td>
        <Button
          variant="info"
          onClick={(e) =>
            putData(
              e,
              scoreCard,
              updatedPlayer1Score,
              updatedPlayer2Score,
              updatedTieCount
            )
          }
        >
          Edit
        </Button>
      </td>
      <td>
        <Button variant="success">
          <Link to="/games" style={{ color: "white" }} state={scoreCard.id}>
            Play
          </Link>
        </Button>
        <br />
        <Badge bg="secondary" pill>
          Card ID: {scoreCard.id}
        </Badge>
      </td>
    </tr>
  );
}
