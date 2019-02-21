import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, NavDropdown, Media } from 'react-bootstrap';
import LogoFont from '../../assets/images/logoFont.png';
import Avatar from '../../assets/images/avatar.png';

const Header = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Navbar.Brand><img src={LogoFont} width="120" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/dashboard"><Nav.Link href="#dashboard">Dashboard</Nav.Link></LinkContainer>
                    <LinkContainer to="/chat"><Nav.Link href="#link">Chats</Nav.Link></LinkContainer>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Media>
                <Media.Body>
                    <h5>Hello Milos!</h5>
                </Media.Body>
                <img
                    width={40}
                    height={40}
                    className="mr-3"
                    src={Avatar}
                    alt="Generic placeholder"
                />
            </Media>
        </Navbar>
    );
}

export default Header;