
import React from "react";
import {Navbar , Nav ,Form,FormControl,Button ,NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
class Naav extends React.Component {
    render() {
    return (
      <div> 
        <Navbar bg="light" expand="lg">
  
  <Navbar.Brand className="Name" href="Home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/Home">
          <a className="nav-link">Home</a>
      </Link>
      
      <Link to="/Contact">
          <a className="nav-link">Contact</a>
      </Link>
      
        <Link to="/About">
            <a className="nav-link">About</a>
        </Link>
        

    </Nav>

  </Navbar.Collapse>
</Navbar>
  
          
      
  </div>
   )
  }
    
  }
  export default Naav;



