import React, { Component } from 'react';

class User extends Component {
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
    // const categories = this.props.user.categories
    //   .map((category, index) => <span key={index}>{category}</span>)
    //   .reduce((prev, curr) => [prev, ' / ', curr]);

    return (
      <div className="event-item" style={{...this.state}}>
        <div className="box-info">
          <div className="box-info--content">
            <div className="description">
              <h1>{this.props.user.name}</h1>
              <p>{this.props.user.username}</p>
            </div>
            {/* <div className="tags">{categories}</div> */}
          </div>
        </div>
      </div>
    );
  };
};

export default User;
