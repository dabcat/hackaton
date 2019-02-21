import React, { Component } from 'react';
import { connect } from 'react-redux';

import Api from '../../services/Api';

import { Card, CardColumns, Badge, ListGroup, ListGroupItem } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import Headline from '../Headline/Headline';
import Layout from '../../components/Layout/Layout';
import Header from '../Header/Header';

import './Connections.scss';

const ApiInit = Api();

class Connections extends Component {
    constructor() {
        super()
        this.state = {
            connections: [],
            allowNew: false,
            isLoading: false,
            options: [],
        };
        this.typeahead = null;
    }
    componentDidMount() {
        const { user } = this.props;

        ApiInit.getConnections(user.email).then((res) => {
            if (res.message !== 'Email is missing') {
                this.setState({ connections: res })
            }
        })
    }

    handleSearch = (query) => {
        this.setState({ isLoading: true });
        ApiInit.searchConnections(query)
            .then((res) => {
                this.setState({
                    isLoading: false,
                    options: res,
                });
            })
    }

    selectedUser = (user) => {
        this.typeahead.getInstance().clear();
        ApiInit.connectWithUser(user).then(res => {
            this.setState({ connections: this.state.connections.concat(user) })
        })
        console.log(user)
    }

    render() {
        if (this.state) {
            const { connections } = this.state;

            return (
                <Layout>
                    <Header></Header>
                    <div>
                        <Headline>Your Connections</Headline>
                        <CardColumns>
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
                        </CardColumns>
                    </div>
                    <div>
                        <Headline>Search for a specialist to connect with:</Headline>
                        <AsyncTypeahead
                            ref={(typeahead) => this.typeahead = typeahead}
                            {...this.state}
                            labelKey={option => `${option.name} (${option.profile.professions})`}
                            minLength={3}
                            onSearch={(q) => this.handleSearch(q)}
                            onChange={(user) => this.selectedUser(user)}
                            placeholder="example: fitness"
                        />
                        <br /><br />
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