import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export function Footer() {
  //This component's purpose is to hold the jsx for a footer that appears on every page of the site
  //It has a single link that is rendered as a button, which will take the user to the top of whatever page they are viewing
  return (
    <>
      <footer>
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          className="justify-content-center"
        >
          <Nav>
            <Navbar.Text data-bs-theme="light">
              <pre>This website was made with React!  </pre>
            </Navbar.Text>
            <Button href="#Top" variant="primary">
              To Top
            </Button>
          </Nav>
        </Navbar>
      </footer>
    </>
  );
}
