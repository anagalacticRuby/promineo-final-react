import { Reference } from "./Reference";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export function ReferencePage() {
  //This component will be the source of the 'references' page, which displays a list of references to websites used to build this website.
  //Bootstrap will be used to organize and display references one by one, maybe with like a flexbox, grid, and some cards.
  //That way each reference gets its own little display and can be viewed, but also to demonstrate styling and design with bootstrap in mind.
  return (
    <>
      <Container fluid="xl">
        <Row>
          <Col>
            <Reference
              imgURL="https://react-bootstrap.netlify.app/img/logo.svg"
              websiteURL="https://react-bootstrap.netlify.app/"
              websiteName="React-Bootstrap"
              websiteDesc="Official Documentation for React-Bootstrap"
            />
          </Col>
          <Col>
            <Reference
              imgURL="https://www.w3schools.com/images/w3schools_logo_436_2.png"
              websiteURL="https://www.w3schools.com/"
              websiteName="w3schools"
              websiteDesc="A website that has tons of helpful tutorials and interactive lessons about various programming and software engineering topics."
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Reference
              imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
              websiteURL="https://react.dev/"
              websiteName="React.dev"
              websiteDesc="The official documentation for React, you can find tons of information to get started with learning React here."
            />
          </Col>
          <Col>
            <Reference
              imgURL="https://reactrouter.com/_brand/react-router-stacked-color.png"
              websiteURL="https://reactrouter.com/en/main"
              websiteName="React Router"
              websiteDesc="Here's where you can learn how to use, install, and set up React Router. This is useful for making multi-page applications like the one you're viewing right now!"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Reference
              imgURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAyElEQVR4Aa3SERCEQBTG8c/96CzNwzw6aibMgjRszqIcsjBI0lwO8tVwfRaW3u2baerNzu1Rf3w/+mYe6E/3oBrbqu5m/QPXBEevzUNbQdRYiSaFDJPEHByyps2fAAoSOIKrd3KZAdACDbiejraVBM5seWBnzfgJYAwgMgGEKz1PVrtsADc8HphP5GmxvRAQWMKlAjjC9Q6ghtziIbU4DtzioYnApf0ydxm46UJS8FICaU8g27w3GS7qDHlIdu2KNCv71d7yt+G+88Y/W2jAZW4AAAAASUVORK5CYII="
              websiteURL="https://graphemica.com/"
              websiteName="Graphemica"
              websiteDesc="A website dedicated to symbols and emoji, you can find every symbol usable in computers here. 
        Just make sure your computer can display it, though.
        This website has been my secret weapon to copy and paste emoji while on a desktop or look up the escape sequence to insert special characters."
            />
          </Col>
          <Col>
            <Reference
              imgURL="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
              websiteURL="https://www.geeksforgeeks.org/create-rock-paper-scissor-game-using-reactjs/"
              websiteName="GeeksforGeeks"
              websiteDesc="A very handy website that has tutorials, lessons, and other things to help you learn just about anything when it comes to programming."
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
