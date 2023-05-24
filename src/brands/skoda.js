import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Card, Button } from "react-bootstrap";
import skoda from "../img/skoda130LR/130lr.png";

function Skoda() {
  return (
    <>
      <Container>
        <Card style={{ margin: "50px", padding: "50px" }}>
          <Card.Title>Škoda</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
            <Card style={{ width: "512px"}}>
              <Card.Img variant="top" src={skoda} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Card>
      </Container>
    </>
  );
}

export default Skoda;
