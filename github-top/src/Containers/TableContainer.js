import React, {Component} from 'react';
import Table from '../Components/Table';
import Button from '../Components/Button';

const UPDATE_TIME = 2 * 60 * 1000; // 2 minutes

class TableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };

    this.updateTable = this.updateTable.bind(this);
  }

  componentDidMount() {
    this.updateTable();
    this.interval = setInterval(() => this.updateTable(), UPDATE_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async updateTable() {
    this.setState(prevState => ({
      ...prevState,
      isLoading: true
    }));

    const data = await this.props.updateTable();

    if (data) {
      this.setState(prevState => ({
        ...prevState,
        data,
        isLoading: false
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        isLoading: false
      }));
    }
  }

  render() {
    const {columns, buttonDetails, tableName, error} = this.props;

    return (
      <div className="table_container">
        <div className="table_container_header">
          <h2>{tableName}</h2>
          <Button
            {...buttonDetails}
            clickHandler={this.updateTable}
            isLoading={this.state.isLoading}
          />
        </div>
        <Table
          columns={columns}
          data={this.state.data}
          isLoading={this.state.isLoading}
          error={error}
        />
      </div>
    );
  }
}

export default TableContainer;
