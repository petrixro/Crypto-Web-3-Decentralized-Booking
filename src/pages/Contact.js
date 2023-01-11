import React from "react";
import bg from "../images/contact.jpg";
import Container from 'react-bootstrap/Container';
import NavBarComponent from "../components/NavBarComponent";

const Contact = () => {

    return(

    <Container fluid style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundSize: "cover" }}>
        <NavBarComponent/>
        <Container>
            <h1 style={{color:"white", textAlign:"center", marginTop:"50px"}}>Something Big is Comming!!</h1>
        </Container>
    </Container>

    );
};

export default Contact