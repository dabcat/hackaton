import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => {
    return (
        <Container>
            <Row>
                <Col md={12}>{children}</Col>
            </Row>
        </Container>
    );
}

export default Layout;