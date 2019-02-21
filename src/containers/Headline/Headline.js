import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Headline.scss';

class Headline extends Component {
    render() {
        return (
            <div className="headline">
                <h2>
                    {this.props.children}
                </h2>
            </div>
        );
    }
}

Headline.propTypes = {
    text: PropTypes.string,
};

export default Headline;