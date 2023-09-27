import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar_ = () => {
   
  

  return (
    <div className="bg-nav">
    <Navbar expand="lg" className="fixed-top bg-nav" bg="nav">
    <Container fluid>
      <Navbar.Brand href="#">DermBot</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav 
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          <i className="fas fa-user" />
          <span className="ml-1"> Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard#form" className="nav-link">
          <i className="fas fa-user" />
          <span className="ml-1"> Get Checked</span>
        </Link>
      </li>

          <li className="nav-item">
        <Link to="/about" className="nav-link">
          <i className="fas fa-user" />
          <span className="ml-1"> About</span>
        </Link>
      </li>
      
           
          
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  );
};

 

 

export default Navbar_;

          
      
     