import React from 'react';
import Event from './Event';
import EventsLoader from '../components/EventsLoader';

const EventsList = ({events, page, pageLimit, isLoading}) => {
  let list = [];

  // Render content loader if loading
  if (isLoading) {
    for (let i = 0; i < pageLimit; i++) {
      list[i] = (
        <li key={i}>
          <EventsLoader />
        </li>
      )
    }
  } else {
    // Get events in a specific page
    const pagedEvents = events.slice((page - 1) * pageLimit, page * pageLimit);

    list = pagedEvents.map(event => (
      <li key={event.id}>
        <Event event={event} />
      </li>
    ));
  }

  return <ul>{list}</ul>;
};

export default EventsList;
