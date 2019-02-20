import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Headline.scss';

class QuestionGroup extends Component {
    render() {
        return (
            <div className="headline">
                <h2>
                    {this.props.text}
                </h2>
            </div>
        );
    }
}

QuestionGroup.propTypes = {
    text: PropTypes.string,
};

export default QuestionGroup;