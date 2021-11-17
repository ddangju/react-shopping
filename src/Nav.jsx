import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const componentName = () => {
  return (
    <div>
      <Nav>
        <Navbar bg="dark" variant="dark" className="navContainer">
          <Container>
            <Navbar.Brand href="#home">Shose Shop</Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link> */}
              <Link to="/">Home</Link>
              {/* </Nav.Link> */}
              {/* <Nav.Link> */}
              <Link to="/Detail">Detail</Link>
              {/* </Nav.Link> */}
              {/* <Nav.Link>Pricing</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
        <br />
      </Nav>
    </div>
  );
};

export default componentName;
