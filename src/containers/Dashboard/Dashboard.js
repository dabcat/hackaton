import React, { Component } from 'react';
import Headline from '../Headline/Headline';
import QuestionGroup from '../QuestionGroup/QuestionGroup';

import Layout from '../../components/Layout/Layout';
import Header from '../Header/Header';

class Dashboard extends Component {

    render() {
        return (
            <Layout>
                <Header></Header>
                <div>
                    <Headline>Recent conversations</Headline>
                    <QuestionGroup />
                </div>
            </Layout>
        );
    }
}

export default Dashboard;