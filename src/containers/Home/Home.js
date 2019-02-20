import React, { Component } from 'react';
import Headline from '../Headline/Headline';
import QuestionGroup from '../QuestionGroup/QuestionGroup';
import { Button, Form, Jumbotron } from 'react-bootstrap';
import InputField from '../../components/InputField/InputField';
import Api from '../../services/Api';

const ApiInit = Api();

class Home extends Component {

    componentDidMount() {
        this.setState({
            user: null,
        })
    }

    doLogin() {
        ApiInit.login(this.state.user);
    }

    getConnections() {
        ApiInit.getConnections(this.state.user)
    }

    handleUser = (val) => {
        this.setState({
            user: val
        })
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to FitnessPal!</h1>
                    <p>
                        Time for some fitness sessions with your favorite coach ;)
                    </p>
                </Jumbotron>
                <Form>
                    <InputField type="text" placeholder="Please login" onInput={(val) => this.handleUser(val)} />
                    <Button variant="primary" onClick={() => this.doLogin()}>Login</Button>
                </Form>
                <Button variant="primary" onClick={() => this.getConnections()}>.!.</Button>
            </div>
        )
    }
}

export default Home;