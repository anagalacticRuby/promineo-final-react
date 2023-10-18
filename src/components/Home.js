import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/Card";
export function Home() {
  //This component is all about the information and elements displayed on the 'home' screen of the website
  //Users will be directed to this page upon first launching the application
  return (
    <>
      <Card bg="success" text="light">
        <Card.Body>
          <h1>Welcome!</h1>
          <p>
            Hello and welcome to my incredible website!
            <br /> I made this website using create-react-app, and it uses React-Bootsrap for styling.
            <br /> React router (v6.16) was used to implement the navigation between
            multiple pages.
          </p>
          <ListGroup>
            A brief description of each page:
            <ListGroup.Item>
              Home - The landing page you are currently viewing right now!
            </ListGroup.Item>
            <ListGroup.Item>
              Games - Here you can play TicTacToe or RockPaperScissors and
              record your scores in the database.
            </ListGroup.Item>
            <ListGroup.Item>
              Crud - You can perform all manner of CRUD operations here, such as
              creating new score cards or editing existing ones
            </ListGroup.Item>
            <ListGroup.Item>
              Resources - A list of websites I used as inspiration or references
              during the development of this website
            </ListGroup.Item>
            <ListGroup.Item>
              Bonus! There's an 'Error: page not found' page, try navigating to
              it yourself!
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
