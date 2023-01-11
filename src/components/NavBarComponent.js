import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../images/logo.png";
import Navbar from 'react-bootstrap/Navbar';
import { ConnectButton, Icon, Select, DatePicker, Input, Button } from "web3uikit";

function NavBarComponent() {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark" style={{padding: "2%"}}>
      <Container fluid>
        <Navbar.Brand href="/">
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top"
              alt="CryptoVilla logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
            <Nav.Link href="/restaurant">Book a Restaurant</Nav.Link>
            <Nav.Link href="/car">Book a Car</Nav.Link>
            <Nav.Link href="/flight">Book a Flight</Nav.Link>
            <Nav.Link href="/trip-experience">Trip experience</Nav.Link>
            <Nav.Link href="/how-to-earn">How to earn</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          <ConnectButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }
export default NavBarComponent;