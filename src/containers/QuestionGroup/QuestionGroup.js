import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionGroup.scss';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class QuestionGroup extends Component {
    render() {
        return (
            <div className="question-group">
                <SingleQuestion
                    chatPerson="Ratko B."
                    profession="Fitness Trainer"
                    dateAsked="January 20th 2019"
                    question="I am not losing any weight despite going to the gym twice a week. What am I doing wrong?"
                    lastMessageSender="Ratko"
                    lastAnswer="Hey Dog, what is your current training schedule? How much do you train your fitness?"
                    link="/chat/" />
                <SingleQuestion
                    chatPerson="Chris Z."
                    profession="Senior Fitness Trainer"
                    dateAsked="February 11th 2019"
                    question="I feel often unmotivated. What should I do?"
                    lastMessageSender="You"
                    lastAnswer="Well yeah, I tried that"
                    link="/chat/2" />
                <Link to="/chat">
                    <Button className="question-group__link">See all</Button>
                </Link>
            </div>
        )
    }
}

QuestionGroup.propTypes = {
    dateAsked: PropTypes.string,
    chatPerson: PropTypes.string,
    questionExcerpt: PropTypes.string,
    profession: PropTypes.string,
};

export default QuestionGroup;