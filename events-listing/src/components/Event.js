import React, { Component } from 'react';
import SubscriptionsList from './SubscriptionsList';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0,
    }
  }

  componentDidMount() {
    setTimeout(() =>
      this.setState({ opacity: 1})
    , 100);
  }
  
  render() {
    const categories = this.props.event.categories
      .map((category, index) => <span key={index}>{category}</span>)
      .reduce((prev, curr) => [prev, ' / ', curr]);

    return (
      <div className="event-item" style={{...this.state}}>
        <div className="box-info">
          <div className="box-info--content">
            <div className="description">
              <h1>{this.props.event.name}</h1>
              <p>{this.props.event.description}</p>
            </div>
            <div className="tags">{categories}</div>
          </div>
          <div className="box-info--footer">
            <SubscriptionsList subscriptions={this.props.event.subscriptions} />
          </div>
        </div>
      </div>
    );
  };
};

export default Event;
