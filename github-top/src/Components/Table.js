import React from 'react';
import TableLoader from './TableLoader';

const Table = ({ columns, data, isLoading, error}) =>
  <div className="table">
    <table>
      <thead className="table-header">
        <tr>
        {columns.map((column, index) => 
            <th key={index}>{column}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {!isLoading && error &&
          <tr>
            <td>{error}</td>
          </tr>
        }
        {!isLoading &&
          data.map((row, index) => 
            <tr key={index}>
              {row.map((property, index) => 
                <td key={index}>
                  {property.type === "img" ? (
                    <img src={property.data} alt="User Avatar" className="user_avatar"/>
                  ) : (
                    property.data
                  )}
                </td>
              )}
            </tr>
          )
        }
      </tbody>
    </table>
    {isLoading &&
      <TableLoader totalColumns={columns.length}/>
    }
  </div>


export default Table;

