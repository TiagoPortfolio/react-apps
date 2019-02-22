import React, {Component} from 'react';
import Link from '../components/Link';
import PropTypes from 'prop-types';

import avatar from '../images/avatar.svg';
import email from '../images/email.svg';
import phone from '../images/phone.svg';
import address from '../images/address.svg';
import website from '../images/website.svg';
import company from '../images/company.svg';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0
    };
  }

  componentDidMount() {
    this.opacityTimeout = setTimeout(() => this.setState({opacity: 1}), 100);
  }

  componentWillUnmount() {
    clearTimeout(this.opacityTimeout);
  }

  render() {
    const {user} = this.props;

    // Build user address without geo coordinates
    const userAddress = Object.keys(user.address)
      .reduce((result, key) => {
        if (key !== 'geo') {
          result.push(user.address[key]);
        }
        return result;
      }, [])
      .join(', ');

    return (
      <div className="user" style={this.state}>
        <img className="user-avatar" src={avatar} alt="User Avatar" />
        <h1>{user.name}</h1>
        <div className="user-email">
          <img src={email} alt="User Email" />
          <em>{user.email.toLowerCase()}</em>
        </div>
        <div className="user-phone">
          <img src={phone} alt="User Phone" />
          <p>{user.phone}</p>
        </div>
        <div className="user-address">
          <img src={address} alt="User Address" />
          <p>{userAddress}</p>
        </div>
        <div className="user-website">
          <img src={website} alt="User Website" />
          <Link url={user.website} title={user.website} />
        </div>
        <div className="user-company">
          <img src={company} alt="User Company" />
          <p>
            <em>{user.company.name}</em> -{' '}
            {user.company.catchPhrase}
          </p>
        </div>
        <div className="user-contact--btn">
          <Link
            url={'mailto:' + user.email.toLowerCase()}
            title="Contact"
          />
        </div>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      catchPhrase: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
};

export default User;
