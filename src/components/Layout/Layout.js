import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => {
    return (
        <Container>
            <Row>
                <Col>{children}</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}

export default Layout;