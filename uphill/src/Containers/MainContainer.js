import React, {Component} from 'react';
import Header from '../Components/Header';
import TOP_USERS from '../json/top_users.json';
import TOP_REPOS from '../json/top_repos.json';
import UsersList from '../Components/UsersList';

class TableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topUsers: [],
      topRepos: []
    };
  }

  // Simulate fetch of data on cDM
  componentDidMount() {
    this.setState({
      topUsers: TOP_USERS,
      topRepos: TOP_REPOS
    })
  }

  render() {

    // Use topUsers data for trending and most active users to simplify
    // Didn't have time to use topRepos, would crate a ReposList component similar to UsersList
    const {
      topUsers,
      // topRepos
    } = this.state;

    return (
      <div className="uphill_container">
        <Header />
        <UsersList title="Trending Users" users={topUsers} />
        <UsersList title="Most Active Users" users={topUsers} />
      </div>
    );
  }
}

export default TableContainer;
