import React, { Component } from 'react';
import Headline from '../Headline/Headline';
import QuestionGroup from '../QuestionGroup/QuestionGroup';

class Home extends Component {
    render() {
        return (
            <div>
                <Headline text="Questions" />
                <QuestionGroup/>
            </div>
        )
    }
}

export default Home;