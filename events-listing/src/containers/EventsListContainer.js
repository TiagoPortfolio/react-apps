import React, {Component} from 'react';
import EventsList from '../components/EventsList';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import EmptyListMessage from '../components/EmptyListMessage';
import StatusMessage from '../components/StatusMessage';

const PAGE_LIMIT = 3;

class EventsListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [], // Original events list
      eventsFound: [], // Filtered events list
      page: 1,
      currentCategory: '',
      eventSearchTerm: '',
      isLoading: false,
      error: null
    };

    this.handleEventSearch = this.handleEventSearch.bind(this);
    this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});
    // events.json file hosted in github pages
    fetch('https://tiagoportfolio.github.io/data/events.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(data => {
        const sortedEvents = this.sortEvents(data);
        this.setState({
          events: sortedEvents,
          eventsFound: sortedEvents,
          isLoading: false
        });
      })
      .catch(error => this.setState({error, isLoading: false}));
  }

  // Filter events by search term and category
  filterEvents = (events, eventSearchTerm, category) =>
    events.filter(
      event =>
        (eventSearchTerm
          ? event.name.toLowerCase().includes(eventSearchTerm)
          : true) && (category ? event.categories.includes(category) : true)
    );

  // Sort by ascending order of the sum of the plans price
  sortEvents = events =>
    events.sort(
      (a, b) =>
        a.subscriptions.reduce((total, {price}) => total + price, 0) -
        b.subscriptions.reduce((total, {price}) => total + price, 0)
    );

  handleCategoryFilter = category => {
    this.setState((state, props) => {
      const currentCategory =
        category === state.currentCategory ? '' : category;
      return {
        eventsFound: this.filterEvents(
          state.events,
          state.eventSearchTerm,
          currentCategory
        ),
        currentCategory,
        page: 1
      };
    });
  };

  handleEventSearch = e => {
    const eventSearchTerm = e.target.value.toLowerCase();
    this.setState((state, props) => ({
      eventsFound: this.filterEvents(
        state.events,
        eventSearchTerm,
        state.currentCategory
      ),
      eventSearchTerm,
      page: 1
    }));
  };

  handlePagination = page => {
    this.setState({page});
  };

  render() {
    const {
      eventsFound,
      page,
      eventSearchTerm,
      currentCategory,
      isLoading,
      error
    } = this.state;

    return (
      <div className="flex-container">
        <Categories
          filterCategory={this.handleCategoryFilter}
          currentCategory={currentCategory}
        />
        <section className="events-list">
          <SearchBar
            searchEvent={this.handleEventSearch}
            eventSearchTerm={eventSearchTerm}
          />
          <StatusMessage error={error}>
            <EventsList events={eventsFound} page={page} pageLimit={PAGE_LIMIT} isLoading={isLoading}/>
            <EmptyListMessage
              events={eventsFound}
              eventSearchTerm={eventSearchTerm}
              currentCategory={currentCategory}
              isLoading={isLoading}
            />
          </StatusMessage>
          <Pagination
            page={page}
            pageLimit={PAGE_LIMIT}
            totalEvents={eventsFound.length}
            changePage={this.handlePagination}
          />
        </section>
      </div>
    );
  }
}

export default EventsListContainer;
