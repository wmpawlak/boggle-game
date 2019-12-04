import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { modalSwitch } from '../../redux/actions';

const Rules = ({ modalSwitch, isRulesModalOn, rulesText }) => {
  return isRulesModalOn ? (
    <div className="modal">
      <div className="container">
        <div className="rules-text">{rulesText}</div>
        <i className="close icon" onClick={modalSwitch} />
      </div>
    </div>
  ) : null;
};

Rules.propTypes = {
  modalSwitch: PropTypes.func,
  isRulesModalOn: PropTypes.bool,
  rulesText: PropTypes.string,
};

const mapDispatchToProps = { modalSwitch };
const mapStateToProps = state => ({
  isRulesModalOn: state.isRulesModalOn,
  rulesText: state.rulesText,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rules);
