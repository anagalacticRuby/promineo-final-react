import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export function Reference( {imgURL, websiteURL, websiteName, websiteDesc}) {
    return (
        <>
        <Card bg="muted" border="success" style={{ height:"320px"}}>
        <Card.Img variant="top" src={imgURL} style={{width:"100px", height:"100px"}}/>
        <Card.Body>
            <Card.Title>{websiteName}</Card.Title>
            <Card.Text>{websiteDesc}</Card.Text>
            <Button variant="primary" href={websiteURL}>Check it out!</Button>
        </Card.Body>
        </Card>
        </>
    )
}