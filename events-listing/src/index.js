import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import EventsListContainer from './containers/EventsListContainer';

export default class App extends Component {
  render() {
    return <EventsListContainer />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));