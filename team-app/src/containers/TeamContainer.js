import React, {Component} from 'react';
import UsersList from '../components/UsersList';
// import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
// import EmptyListMessage from '../components/EmptyListMessage';
// import StatusMessage from '../components/StatusMessage';

const PAGE_LIMIT = 3;

class TeamContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [], // Original users list
      usersFound: [], // Filtered users list
      page: 1,
      currentCategory: '',
      userSearchTerm: '',
      isLoading: false,
      error: null
    };

    this.handleUserSearch = this.handleUserSearch.bind(this);
    // this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});
    // users.json file hosted in github pages
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.ok) {
			console.log("response 1", response);
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(data => {
		console.log("data 1", data);
        // const sortedUsers = this.sortUsers(data);
        this.setState({
          users: data,
          usersFound: data,
          isLoading: false
        });
      })
      .catch(error => this.setState({error, isLoading: false}));
  }

  // Filter users by search term and category
  filterUsers = (users, userSearchTerm, category) =>
    users.filter(
      user =>
        (userSearchTerm
          ? user.name.toLowerCase().includes(userSearchTerm)
          : true) && (category ? user.categories.includes(category) : true)
    );

  // Sort by ascending order of the sum of the plans price
//   sortUsers = users =>
//     users.sort(
//       (a, b) =>
//         a.subscriptions.reduce((total, {price}) => total + price, 0) -
//         b.subscriptions.reduce((total, {price}) => total + price, 0)
//     );

//   handleCategoryFilter = category => {
//     this.setState((state, props) => {
//       const currentCategory =
//         category === state.currentCategory ? '' : category;
//       return {
//         usersFound: this.filterUsers(
//           state.users,
//           state.userSearchTerm,
//           currentCategory
//         ),
//         currentCategory,
//         page: 1
//       };
//     });
//   };

  handleUserSearch = e => {
    const userSearchTerm = e.target.value.toLowerCase();
    this.setState((state, props) => ({
      usersFound: this.filterUsers(
        state.users,
        userSearchTerm,
        state.currentCategory
      ),
      userSearchTerm,
      page: 1
    }));
  };

//   handlePagination = page => {
//     this.setState({page});
//   };

  render() {
    const {
      usersFound,
      page,
      userSearchTerm,
      isLoading,
    //   error
    } = this.state;

    return (
      <div className="flex-container">
        <section className="users-list">
          <SearchBar
            searchUser={this.handleUserSearch}
            userSearchTerm={userSearchTerm}
          />
          {/* <StatusMessage error={error}> */}
            <UsersList users={usersFound} page={page} pageLimit={PAGE_LIMIT} isLoading={isLoading}/>
            {/* <EmptyListMessage
              users={usersFound}
              userSearchTerm={userSearchTerm}
              currentCategory={currentCategory}
              isLoading={isLoading}
            /> */}
          {/* </StatusMessage> */}
          {/* <Pagination
            page={page}
            pageLimit={PAGE_LIMIT}
            totalusers={usersFound.length}
            changePage={this.handlePagination}
          /> */}
        </section>
      </div>
    );
  }
}

export default TeamContainer;
