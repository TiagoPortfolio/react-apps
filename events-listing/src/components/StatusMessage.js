import React from 'react';

const StatusMessage = ({error, children}) => {
  if (error) {
    return <p>{error.message}</p>;
  }

  return children;
};

export default StatusMessage;
