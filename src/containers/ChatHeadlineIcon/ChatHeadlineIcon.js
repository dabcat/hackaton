import React, { Component } from 'react';
import 'react-chat-elements/dist/main.css';
import Headline from '../Headline/Headline';
import CloseIconRed from '../../assets/images/closeIconRed.png';
import BackIcon from '../../assets/images/backIcon.png';
import { Link } from 'react-router-dom';

class ChatHeadlineIcon extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Headline wrapperClasses="col-10 col-lg-9 icon-left">
                        <Link to="/chat"><img className="chat-icons__back-icon" src={BackIcon} width={16} alt="" /></Link>
                        Conversation with {this.props.chatPerson}
                    </Headline>
                    <div className="chat-icons col-2 col-lg-3">
                        <img className="chat-icons__close-icon" src={CloseIconRed} width={30} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatHeadlineIcon;