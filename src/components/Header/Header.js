import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>FitnessPal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/"><Nav.Link href="#home">Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/chat"><Nav.Link href="#link">Chat</Nav.Link></LinkContainer>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;