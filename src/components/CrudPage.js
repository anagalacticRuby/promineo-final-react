import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

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

  //Variables used for the update method
  const [updatedPlayer1Score, setUpdatedPlayer1Score] = useState(0);
  const [updatedPlayer2Score, setUpdatedPlayer2Score] = useState(0);
  const [updatedTieCount, setUpdatedTieCount] = useState(0);

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

  function putData(e, scoreCardObj) {
    e.preventDefault();

    let updatedScoreCardObj = {
      ...scoreCardObj,
      player1Score: updatedPlayer1Score,
      player2Score: updatedPlayer2Score,
      ties: updatedTieCount,
    };

    fetch(`${ENDPOINT}/${scoreCardObj.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedScoreCardObj),
    })
      .then(() => getData())
      .then(() => alert("Score Card Updated"));
  }

  return (
    <>
    <Header/>
      <CrudForm
        postData={postData}
        setNewPlayer1Score={setNewPlayer1Score}
        setNewPlayer2Score={setNewPlayer2Score}
        setNewTieCount={setNewTieCount}
        newPlayer1Score={newPlayer1Score}
        newPlayer2Score={newPlayer2Score}
        newTieCount={newTieCount}
      />
      <CrudTable
        scoreCard={scoreCard}
        deleteData={deleteData}
        putData={putData}
        setUpdatedPlayer1Score={setUpdatedPlayer1Score}
        setUpdatedPlayer2Score={setUpdatedPlayer2Score}
        setUpdatedTieCount={setUpdatedTieCount}
        updatedTieCount={updatedTieCount}
      />
      <Footer/>
    </>
  );
}
