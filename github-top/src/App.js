import React, { Component } from 'react';
import './App.css';
import TableContainer from './Containers/TableContainer';

const GITHUB_API = "https://api.github.com/";
const TABLE_ROWS = 5;
const DATE = getLastMonthDate();
const TOP_REPOS_URL = `${GITHUB_API}search/repositories`
const TOP_USERS_URL = `${GITHUB_API}search/users`

// Get last month date
function getLastMonthDate() {
  // First day of last month
  let lastMonthDate = new Date();
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
  lastMonthDate.setDate(1);

  // Split to get YYYY-MM-DD
  return lastMonthDate.toISOString().split('T')[0];
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };

    this.getTopReposFromLastMonth = this.getTopReposFromLastMonth.bind(this);
    this.getTopUsersFromLastMonth = this.getTopUsersFromLastMonth.bind(this);
  }

  async getTopReposFromLastMonth() {
    let topRepos = [];

    // Request arguments
    const fetchArguments = [
      `q=created:>=${DATE}`,
      "sort=stars",
      "order=desc",
      `per_page=${TABLE_ROWS}`
    ];

    // Build request URL
    const fetchUrl = `${TOP_REPOS_URL}?${fetchArguments.join('&')}`;

    const data = await this.fetchData(fetchUrl);

    if (data) {
      if (data.items) {
        topRepos = data.items.map(item => [
          {
            data: item.id,
            type: "int"
          },
          {
            data: item.name,
            type: "string"
          },
          {
            data: item.description,
            type: "string"
          },
          {
            data: item.stargazers_count,
            type: "int"
          },
        ]);
      }
    }

    return topRepos;
  }

  async getTopUsersFromLastMonth() {
    let topUsers = [];

    // Request arguments
    const fetchArguments = [
      `q=created:>=${DATE}`,
      "sort=followers",
      "order=desc",
      `per_page=${TABLE_ROWS}`
    ];

    // Build request URL
    const fetchUrl = `${TOP_USERS_URL}?${fetchArguments.join('&')}`;

    const data = await this.fetchData(fetchUrl);

    if (data) {
      if (data.items) {
        const promises = data.items.map(async item => {
          const {followers} = await this.fetchData(item.url);
          return [
            {
              data: item.id,
              type: "int"
            },
            {
              data: item.login,
              type: "string"
            },
            {
              data: item.avatar_url,
              type: "img"
            },
            {
              data: followers,
              type: "int"
            },
          ];
        });
        return Promise.all(promises);
      }
    }

    return topUsers;
  }

  async fetchData(url) {
    try {
      const response = await fetch(url,
        {
          method: 'get',
          headers: {
            Accept: 'application/vnd.github.v3+json' // API v3 to guarantee response stability
          }
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong... Please try again later!');
      } else {
        this.setState((prevState) => ({
          ...prevState,
          error: null
        }));

      }

      return await response.json();
    } catch (error) {
      console.log(error);
      console.log(error.message);
      this.setState((prevState) => ({
        ...prevState,
        error: error.message
      }));
    }
  }

  render() {
    const {
      error
    } = this.state;

    return (
      <div className="App">
        <TableContainer
          updateTable={this.getTopReposFromLastMonth}
          columns={["ID", "Name", "Description", "Stars"]}
          tableName="Github Repositories With Most Stars of Last Month"
          buttonDetails={{
            id: "hot_repo",
            className: "table_button",
            name: "Refresh"
          }}
          error={error}
        />
        <TableContainer
          updateTable={this.getTopUsersFromLastMonth}
          columns={["ID", "Login", "Avatar", "Followers"]}
          tableName="Most Active Users by Followers From Last Month"
          buttonDetails={{
            id: "prolific_users",
            className: "table_button",
            name: "Refresh"
          }}
          error={error}
        />
      </div>
    );
  }
}

export default App;
