import React, { Component } from 'react';
import 'react-chat-elements/dist/main.css';
import { Button, Form } from 'react-bootstrap';
import './ChatInput.scss';
import UploadIcon from '../../assets/images/uploadIcon.png';

class ChatInput extends Component {
    render() {
        return (
            <Form className="chat-input">
                <Form.Control type="text" placeholder="Normal text" />
                <div className="chat-input__buttons">
                    <img src={UploadIcon} width={20} alt="Upload images or files" title="Upload images or files" />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>

        );
    }
}

export default ChatInput;