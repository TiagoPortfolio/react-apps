import React, {Component} from 'react';
import UsersList from '../components/UsersList';
import SearchBar from '../components/SearchBar';
import StatusMessage from '../components/StatusMessage';

class TeamContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [], // Original users list
      usersFound: [], // Filtered users list
      userSearchTerm: '',
      isLoading: false,
      error: null
    };

    this.handleUserSearch = this.handleUserSearch.bind(this);
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Something went wrong... Please try again later!');
      }

      this.setState((prevState) => ({
        ...prevState,
        error: null
      }));

      const data = await response.json();

      this.setState({
        users: data,
        usersFound: data,
        isLoading: false
      });

    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }

  // Filter users by name or email
  filterUsers = (users, userSearchTerm) =>
    users.filter(
      user =>
        (userSearchTerm
          ? (
            user.name.toLowerCase().includes(userSearchTerm) ||
            user.email.toLowerCase().includes(userSearchTerm)
          )
          : true
        )
    );

  handleUserSearch = e => {
    const userSearchTerm = e.target.value.toLowerCase();
    this.setState(prevState => {
      const usersFound = this.filterUsers(
        prevState.users,
        userSearchTerm,
        prevState.currentCategory
      );
      
      const error = usersFound.length ? null : `No users found for "${userSearchTerm}"`;

      return {
        usersFound,
        userSearchTerm,
        error
      };
    });
  };


  render() {
    const {
      usersFound,
      userSearchTerm,
      isLoading,
      error
    } = this.state;

    return (
      <div className="flex-container">
        <section className="team-users">
          <h1 className="app-title">Team App</h1>
          <SearchBar
            searchUser={this.handleUserSearch}
            userSearchTerm={userSearchTerm}
          />
          <StatusMessage error={error}>
            <div className="users-list">
              <UsersList users={usersFound} isLoading={isLoading}/>
            </div>
            {/* <EmptyListMessage
              users={usersFound}
              userSearchTerm={userSearchTerm}
              currentCategory={currentCategory}
              isLoading={isLoading}
            /> */}
          </StatusMessage>
        </section>
      </div>
    );
  }
}

export default TeamContainer;
