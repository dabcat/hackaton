import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SingleQuestion.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class SingleQuestion extends Component {
    render() {
        return (
            <div className="single-question">
                <div className="row">
                    <div className="col-sm-7 single-question__date">Asked on <strong>{this.props.dateAsked}</strong>, last answer 2 hours ago</div>
                    <div className="col-sm single-question__chat-with">Chat with: {this.props.chatPerson} | {this.props.profession}</div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className=" single-question__question">
                            <strong>Question: {this.props.question}</strong>
                        </div>
                        <div className="single-question__answer">
                            Last sent message:<br />
                            {this.props.lastMessageSender}: {this.props.lastAnswer}
                        </div>
                    </div>
                    <div className="col-lg-3 single-question__link">
                        <Link to={this.props.link}><Button variant="success">Chat</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

SingleQuestion.propTypes = {
    dateAsked: PropTypes.string,
    chatPerson: PropTypes.string,
    question: PropTypes.string,
    profession: PropTypes.string,
    link: PropTypes.string,
    lastAnswer: PropTypes.string,
    lastMessageSender: PropTypes.string,
};

export default SingleQuestion;