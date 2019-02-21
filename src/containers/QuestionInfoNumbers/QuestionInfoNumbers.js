import React, { Component } from 'react';
import './QuestionInfoNumbers.scss';
class QuestionInfoNumbers extends Component {

    render() {
        return (
            <div className="col-lg-3">
                <div className="question-info__number">6</div>
                <div>currently open conversations</div>
                <div className="question-info__number">22</div>
                <div>solved conversations</div>
            </div>
        );
    }
}

export default QuestionInfoNumbers;