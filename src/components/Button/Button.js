import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <button className="buttons" onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
