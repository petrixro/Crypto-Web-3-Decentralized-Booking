import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
import { Icon,  DatePicker, Button } from "web3uikit";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NavBarComponent from "../components/NavBarComponent";



const Home = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(1);

  
  return (
    <>
    <Container fluid style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundSize: "cover" }}>
    <NavBarComponent/>
      
    <Container style={{backgroundColor: "white", borderRadius: "20px", padding: "2%", maxWidth:"800px", marginTop:"30px"}}>
    <Form>
      <Row>
        <Col>
        <Form.Label>Location</Form.Label>
        <Form.Select
        name="location" 
        defaultValue="New York"
        onChange={e => {
          setDestination(e.target.value)
        }}>
            <option>New York</option>
            <option>London</option>
            <option>Dubai</option>
            <option>Los Angeles</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Check in</Form.Label>
          <DatePicker
              
              onChange={(event) => setCheckIn(event.date)}
            />
        </Col>
        <Col>
        <Form.Label>Check out</Form.Label>
          <DatePicker
              onChange={(event) => setCheckOut(event.date)}
            />
        </Col>
        <Col>
        <Form.Label>Guests</Form.Label>
          <Form.Control  
          type="number" 
          min={1} 
          max={10}
          onChange={e => {
            setGuests(e.target.value)
          }}/>
        </Col>
        <Col style={{maxWidth: "70px", display:"flex", alignItems:"flex-end"}}>
        <Link to={"/rentals"} state={{
            destination: destination,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests
          }}>
          <div className="searchButton">
            <Icon fill="#ffffff" size={24} svg="search" />
          </div>
          </Link>
          </Col>
      </Row>
    </Form>
    </Container>
    <div className="randomLocation">
        <div className="title">Feel Adventurous</div>
        <div className="text">
          Let us decide and discover new places to stay, live, work or just
          relax.
        </div>
        <Button
          text="Explore A Location"
          onClick={() => console.log(checkOut)}
        />
      </div>
      </Container>
      </>
  );
};

export default Home;
