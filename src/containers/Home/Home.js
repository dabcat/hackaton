import React, { Component } from 'react';
import { Button, Form, Jumbotron } from 'react-bootstrap';
import InputField from '../../components/InputField/InputField';
import Api from '../../services/Api';
import './Home.scss';
import logo from '../../assets/images/fullLogo.png';

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
            <div className="home">
                <div className="home__form-wrapper">

                    <Jumbotron>
                        <img src={logo} alt="" width="350" />
                    </Jumbotron>
                    <Form>
                        <InputField type="text" placeholder="Enter email to log in" onInput={(val) => this.handleUser(val)}/>
                        <Button variant="primary" onClick={() => this.doLogin()}>Login</Button>
                    </Form>
                    {/*<Button variant="primary" onClick={() => this.getConnections()}>.!.</Button>*/}
                </div>
            </div>
        );
    }
}

export default Home;