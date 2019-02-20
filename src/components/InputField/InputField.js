import React from 'react';

import { Form } from 'react-bootstrap';

const InputField = ({ label, type, input, onInput, placeholder }) => {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} onChange={(input) => onInput(input.target.value)} />
            <Form.Text>
                {input}
            </Form.Text>
        </Form.Group>
    )
}

export default InputField;