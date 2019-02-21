import React, { Component } from 'react';
import { connect } from 'react-redux';

import Api from '../../services/Api';

import { Card, CardGroup, Badge, ListGroup, ListGroupItem } from 'react-bootstrap';

import Headline from '../Headline/Headline';
import Layout from '../../components/Layout/Layout';
import Header from '../Header/Header';

import './Connections.scss';

const ApiInit = Api();

class Connections extends Component {
    constructor() {
        super()
        this.state = { connections: [] };
    }
    componentDidMount() {
        const { user } = this.props;

        ApiInit.getConnections(user.email).then((res) => {
            if (res.message !== 'Email is missing') {
                this.setState({ connections: res })
            }
        })
    }

    render() {
        if (this.state) {
            const { connections } = this.state;
            return (
                <Layout>
                    <Header></Header>
                    <div>
                        <Headline>Your Connections</Headline>
                        <CardGroup>
                            {connections && connections.map((item, index) => {
                                return (
                                    <Card style={{ width: '18rem' }} key={index}>
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{item.email}</Card.Subtitle>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem><Badge variant="primary">Occupation:</Badge> <strong>{item.profile.professions}</strong></ListGroupItem>
                                            <ListGroupItem><Badge variant="secondary">Hobies:</Badge> {item.profile.hobies}</ListGroupItem>
                                            <ListGroupItem><Badge variant="info">Interests:</Badge> {item.profile.interests}</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href="/chat/1">Chat</Card.Link>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </CardGroup>
                    </div>
                </Layout>
            )
        } else {
            return null
        }
    }
}

const mapState = state => ({
    user: state.user
});

export default connect(mapState)(Connections);