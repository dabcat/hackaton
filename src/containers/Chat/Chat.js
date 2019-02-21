import React, { Component } from 'react';

import Layout from '../../components/Layout/Layout';
import Header from '../Header/Header';
import Headline from '../Headline/Headline';
import QuestionGroup from '../QuestionGroup/QuestionGroup';
import { Row } from 'react-bootstrap';
import './Chat.scss';

class Chat extends Component {
    render() {
        return (
            <Layout>
                <Header></Header>
                <Headline>All conversations</Headline>
                <Row>
                    <QuestionGroup wrapperClasses="col-lg-12"/>
                    <QuestionGroup wrapperClasses="col-lg-12"/>
                    <QuestionGroup wrapperClasses="col-lg-12"/>
                </Row>
            </Layout>
        );
    }
}

export default Chat;