import React from 'react';
import { Link } from 'react-router-dom';

const TemplatesTable = ({ data, deleteTemplate }) => {
  return (
    <div className="templates-table">
      <div className="button-container">
        <Link to="/create">
          <button className="create-button">Create New</button>  
        </Link>
      </div>
      
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Description</th>
            <th>Creator</th>
            <th>Creator Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='dashboard' >
          {data.map(({ ID, name, description, creator, creatorType, status }, index) => (
            <tr key={ID}>
              {/* <td>{ID}</td> */}
              <td>{name}</td>
              <td>{description}</td>
              <td>{creator}</td>
              <td>{creatorType}</td>
              <td><span className="status">{status}</span></td>
              <td>
                <Link to={'/view'} state={{ ID, name, description, creator, creatorType }}>
                  <button>View</button>
                </Link>
                <Link to={'/edit'} state={{ ID, name, description, creator, creatorType, status }}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteTemplate(ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TemplatesTable;
