import React, { Component } from 'react';
import Headline from '../Headline/Headline';
import QuestionGroup from '../QuestionGroup/QuestionGroup';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <Headline>Recent conversations</Headline>
                <QuestionGroup />
            </div>
        )
    }
}

export default Dashboard;