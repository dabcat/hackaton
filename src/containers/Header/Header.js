import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { actionLogoutUser } from '../Home/actions';

class Header extends Component {
    componentDidMount() {
        this.setState({ user: this.props.user })
    }

    logoutUser = () => {
        this.props.dispatch(actionLogoutUser());
        this.props.history.push('/');
    }

    render() {
        const { user } = this.props;
        return (
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand>FitnessPal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/dashboard"><Nav.Link href="#dashboard">Dashboard</Nav.Link></LinkContainer>
                        <LinkContainer to="/chat"><Nav.Link href="#link">Chat</Nav.Link></LinkContainer>
                        <NavDropdown title={user.email} id="basic-nav-dropdown">
                            <LinkContainer to="/connections"><NavDropdown.Item>Connections</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/dashboard"><NavDropdown.Item>Conversations</NavDropdown.Item></LinkContainer>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => this.logoutUser()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapState = state => ({
    user: state.user
});

export default connect(mapState)(withRouter(Header));