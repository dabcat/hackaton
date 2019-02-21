import React, { Component } from 'react';
import Headline from '../Headline/Headline';
import QuestionGroup from '../QuestionGroup/QuestionGroup';
import './Dashboard.scss';

import Layout from '../../components/Layout/Layout';
import Header from '../Header/Header';
import QuestionInfoNumbers from '../QuestionInfoNumbers/QuestionInfoNumbers';
import { Row } from 'react-bootstrap';
class Dashboard extends Component {

    render() {
        return (
            <Layout>
                <Header></Header>
                <Headline>Recent conversations</Headline>
                <Row>
                    <QuestionGroup wrapperClasses="col-lg-9" seeAllLink={true} />
                    <QuestionInfoNumbers />
                </Row>
            </Layout>
        );
    }
}

export default Dashboard;