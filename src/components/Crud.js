import {useState, useEffect} from "react"
export function Crud(){
//This component deals with all of the CRUD operations, it will be imported by another file that will use the functions with a form
//or something
    const ENDPOINT = "https://638959874eccb986e8905258.mockapi.io/CrudAPI/FinalSite"; //Endpoint for website
    const [scoreCard, setScoreCard] = useState([{}]);

    //Variables used for post method
    const [newPlayer1Score, setNewPlayer1Score] = useState(0);
    const [newPlayer2Score, setNewPlayer2Score] = useState(0);
    const [newTieCount, setNewTieCount] = useState(0);

    //Variables used for the update method
    const [updatedPlayer1Score, setUpdatedPlayer1Score] = useState(0)
    const [updatedPlayer2Score, setUpdatedPlayer2Score] = useState(0)
    const [updatedTieCount, setUpdatedTieCount] = useState(0);


    function getData(){
    fetch(ENDPOINT)
    .then((data) => data.json())
    .then((data) => setReservations(data));
    }

    useEffect(() => {
        getData();
        console.log(scoreCard)
    }, [])

    function deleteData(){
        fetch(`${ENDPOINT}/${id}`,{
            method: "DELETE"
        })
        .then(() => getData())
        .then(() => alert("Score Card Deleted"))
    }
    function postData(e){
        e.preventDefault();
        console.log(newPlayer1Score,newPlayer2Score,newTieCount);

        fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                player1Score: newPlayer1Score,
                player2Score: newPlayer2Score,
                ties: newTieCount,
            }),
        })
        .then(() => getData())
        .then(() => alert("Score Card Created"))
    }

    function postData(e, scoreCardObj){
        e.preventDefault();

        let updatedScoreCardObj = {
            ...scoreCardObj,
            player1Score: updatedPlayer1Score,
            player2Score: updatedPlayer2Score,
            ties: updatedTieCount,
        };

        fetch(`${ENDPOINT}/${scoreCardObj.id}`, {
            method: "PUT",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(updatedScoreCardObj)
        })
        .then(() => getData())
        .then(() => alert("Score Card Updated"))
    }
}