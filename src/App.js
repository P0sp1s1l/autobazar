import { Navbar, Container, Nav } from "react-bootstrap";
import Skoda from "./brands/skoda";
import Audi from "./brands/audi";
import Lancia from "./brands/lancia";
import Fiat from "./brands/ford";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Skoda">Škoda</Nav.Link>
              <Nav.Link href="Audi">Audi</Nav.Link>
              <Nav.Link href="Lancia">Lancia</Nav.Link>
              <Nav.Link href="Fiat">Fiat</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Skoda></Skoda>
      <Audi></Audi>
      <Lancia></Lancia>
      <Fiat></Fiat>
    </>
  );
}

export default App;
