import  Nav  from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

export function Footer(){
    //This component's purpose is to hold the jsx for a footer that appears on every page of the site
    return(
        <>
        <footer>
            <Navbar bg="warning">
                <Nav>
                    <Nav.Link href="#Top">To Top</Nav.Link>
                </Nav>
                <Navbar.Text>This website was made with React!</Navbar.Text>
            </Navbar>
        </footer>
        </>
    )
}