import React from 'react';

const SubscriptionsList = ({subscriptions}) => {
  const list = subscriptions.map((subscription, index) => {
    return (
      <li key={index}>
        <span>{subscription.name}</span>
        <h3>
          {!subscription.price ? (
            <React.Fragment>
              {'Free'}<sup />
            </React.Fragment>
          ) : (
            <React.Fragment>
              {(subscription.price / 100).toFixed(2)}<sup>€</sup>
            </React.Fragment>
          )}
        </h3>
      </li>
    );
  });

  return <ul>{list}</ul>;
};

export default SubscriptionsList;