import React from 'react';
import SubscriptionsList from './SubscriptionsList';

const Event = ({event, isLoading}) => {
  const categories = event.categories
    .map((category, index) => <span key={index}>{category}</span>)
    .reduce((prev, curr) => [prev, ' / ', curr]);

  return (
    <div className="event-item">
      <div className="box-info">
        <div className="box-info--content">
          <div className="description">
            <h1>{event.name}</h1>
            <p>{event.description}</p>
          </div>
          <div className="tags">{categories}</div>
        </div>
        <div className="box-info--footer">
          <SubscriptionsList subscriptions={event.subscriptions} />
        </div>
      </div>
    </div>
  );
};

export default Event;
