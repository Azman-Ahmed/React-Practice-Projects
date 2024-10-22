import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const TemplatesTable = ({ data, deleteTemplate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(({ name, description, creator, creatorType }) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      name.toLowerCase().includes(lowerSearch) || description.toLowerCase().includes(lowerSearch) || creator.toLowerCase().includes(lowerSearch) ||creatorType.toLowerCase().includes(lowerSearch)
    );
  });

  const handleDelete = (ID) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this template?");
    if (confirmDelete) {
      deleteTemplate(ID); 
    }
  };

  return (
    <div className="templates-table">
      <ToastContainer />
      <div className="button-container">
        <Link to="/create">
          <button className="create-button">Create New</button>
        </Link>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Creator</th>
            <th>Creator Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="dashboard">
          {filteredData.map(({ ID, name, description, creator, creatorType, status }) => (
            <tr key={ID}>
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
                <button onClick={() => handleDelete(ID)}>Delete</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TemplatesTable;
