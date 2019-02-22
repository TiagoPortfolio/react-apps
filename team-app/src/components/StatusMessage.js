import React from 'react';
import PropTypes from 'prop-types';

const StatusMessage = ({error, children}) => {
  if (error) {
    return <p>{error}</p>;
  }

  return children;
};

StatusMessage.propTypes = {
  user: PropTypes.object.isRequired,
  children: PropTypes.element
};

export default StatusMessage;
