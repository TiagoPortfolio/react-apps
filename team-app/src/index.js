import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import TeamContainer from './containers/TeamContainer';

export default class App extends Component {
  render() {
    return <TeamContainer />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));