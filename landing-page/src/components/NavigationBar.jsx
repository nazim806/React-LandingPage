import React from "react";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #grey; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #black;
    &:hover { color: blue; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #blue;
    &:hover { color: blue; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
     
        <AllInclusiveIcon />
    
      <Navbar.Brand href="/">Landing Page</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">News Media</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)



