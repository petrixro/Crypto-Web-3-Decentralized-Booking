import React from "react";
import bg from "../images/flight.jpg";
import Container from 'react-bootstrap/Container';
import NavBarComponent from "../components/NavBarComponent";

const BookFlight = () => {

    return(

    <Container fluid style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundSize: "cover" }}>
        <NavBarComponent/>
        <Container>
            <h1 style={{color:"white", textAlign:"center", marginTop:"50px"}}>Something Big is Comming!!</h1>
        </Container>
    </Container>

    );
};

export default BookFlight