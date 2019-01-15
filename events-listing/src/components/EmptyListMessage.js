import React from 'react';

const EmptyListMessage = ({events, eventsearchTerm, currentCategory, isLoading}) => {
  // Hide component if not an empty list or if list is loading for the first time
  if (events.length || isLoading) {
    return null;
  }

  let message = ['No results found'];

  if (eventsearchTerm) {
    message.push(' for ', <em key="1">"{eventsearchTerm}"</em>);
  }

  if (currentCategory) {
    message.push(' in ', <strong key="2">{currentCategory}</strong>);
  }

  message.push('.');

  return <span>{message}</span>;
};

export default EmptyListMessage;
