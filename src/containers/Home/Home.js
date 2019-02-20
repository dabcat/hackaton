import React, { Component } from 'react';
import Headline from '../Headline/Headline';
import QuestionGroup from '../QuestionGroup/QuestionGroup';
import { Button, Form } from 'react-bootstrap';
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
        console.log('login');
        ApiInit.login(this.state.user);
    }

    handleUser = (val) => {
        console.log(val)
        this.setState({
            user: val
        })
    }

    render() {
        return (
            <div>
                <Form>
                    <InputField type="text" placeholder="Please login" onInput={(val) => this.handleUser(val)} />
                    <Button variant="primary" onClick={() => this.doLogin()}>Login</Button>
                </Form>
                <Headline text="Questions" />
                <QuestionGroup/>
            </div>
        )
    }
}

export default Home;