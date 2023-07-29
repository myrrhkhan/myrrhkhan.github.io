import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';

// for future reference: https://react-bootstrap.netlify.app/docs/components/navbar/
// https://www.youtube.com/watch?v=8pKjULHzs0s

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./headshot.png"
            alt="Myrrh Khan's face"
            width="100"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand" />
            <h2 className="NavbarText">Myrrh Khan's Site</h2>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;