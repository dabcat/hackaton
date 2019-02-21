import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Jumbotron, Alert } from 'react-bootstrap';
import InputField from '../../components/InputField/InputField';
import Api from '../../services/Api';
import { actionGetUser, actionLoginUser, actionLoginError } from './actions';
import './Home.scss';
import logo from '../../assets/images/fullLogo.png';

const ApiInit = Api();

class Home extends Component {

    componentDidMount() {
        this.setState({ user: [this.props.dispatch(actionGetUser())] });
    }

    doLogin() {
        ApiInit.login(this.state.user).then((res) => {
            if (res.message === 'User doesnt exist') {
                this.props.dispatch(actionLoginError());
                this.setState({ error: 'User not found!' })
            } else {
                this.props.dispatch(actionLoginUser(res));
                this.props.history.push('/dashboard')
            }
        });
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
            <div className="home">
                <div className="home__form-wrapper">

                    <Jumbotron>
                        <img src={logo} alt="" width="350" />
                    </Jumbotron>
                    <Form>
                        {this.state && this.state.error && (
                            <Alert variant='danger'>{this.state.error}</Alert>
                        )}
                        <InputField type="text" placeholder="Enter email to log in" onInput={(val) => this.handleUser(val)} />
                        <Button variant="primary" onClick={() => this.doLogin()}>Login</Button>
                    </Form>
                    {/*<Button variant="primary" onClick={() => this.getConnections()}>.!.</Button>*/}
                </div>
            </div>
        );
    }
}


const mapState = state => ({
    user: state.user
});

export default connect(mapState)(Home);
