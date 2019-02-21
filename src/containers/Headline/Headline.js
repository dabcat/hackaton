import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Headline.scss';

class Headline extends Component {
    render() {
        let classes = ['headline'];
        if (this.props.wrapperClasses) {
            classes.push(this.props.wrapperClasses);
        }

        return (
            <div className={classes.join(' ')}>
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