import React, { Component } from 'react';
import 'react-chat-elements/dist/main.css';
import { MessageBox, MessageList } from 'react-chat-elements';
import Headline from '../Headline/Headline';
import CloseIconRed from '../../assets/images/closeIconRed.png';
import BackIcon from '../../assets/images/backIcon.png';

class ChatHeadlineIcon extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Headline wrapperClasses="col-lg-9 icon-left">
                        <img className="chat-icons__back-icon" src={BackIcon} width={16} alt=""/>
                        Conversation with {this.props.chatPerson}
                    </Headline>
                    <div className="chat-icons col-lg-3">
                        Close chat and disconnect
                        <img className="chat-icons__close-icon" src={CloseIconRed} width={30} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatHeadlineIcon;