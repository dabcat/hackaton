import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, Media } from 'react-bootstrap';
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