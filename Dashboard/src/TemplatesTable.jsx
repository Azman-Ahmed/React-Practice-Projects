import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const TemplatesTable = ({ data, deleteTemplate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCreator, setFilterCreator] = useState('');
  const [filterCreatorType, setFilterCreatorType] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Assuming `creator`, `creatorType`, and `status` options are dynamic based on data
  const uniqueCreators = [...new Set(data.map(template => template.creator))];
  const uniqueCreatorTypes = [...new Set(data.map(template => template.creatorType))];
  const uniqueStatuses = [...new Set(data.map(template => template.status))];

  const filteredData = data.filter(({ name, description, creator, creatorType, status }) => {
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch = 
      name.toLowerCase().includes(lowerSearch) || 
      description.toLowerCase().includes(lowerSearch) || 
      creator.toLowerCase().includes(lowerSearch) || 
      creatorType.toLowerCase().includes(lowerSearch);

    const matchesCreator = filterCreator ? creator === filterCreator : true;
    const matchesCreatorType = filterCreatorType ? creatorType === filterCreatorType : true;
    const matchesStatus = filterStatus ? status === filterStatus : true;

    return matchesSearch && matchesCreator && matchesCreatorType && matchesStatus;
  });

  const handleDelete = (ID) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this template?");
    if (confirmDelete) {
      deleteTemplate(ID);
      toast.success("Template deleted successfully!"); // Show toast on delete
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

      <div className="filter-container">
        {/* Creator Filter */}
        <select value={filterCreator} onChange={(e) => setFilterCreator(e.target.value)}>
          <option value="">All Creators</option>
          {uniqueCreators.map(creator => (
            <option key={creator} value={creator}>{creator}</option>
          ))}
        </select>

        {/* Creator Type Filter */}
        <select value={filterCreatorType} onChange={(e) => setFilterCreatorType(e.target.value)}>
          <option value="">All Creator Types</option>
          {uniqueCreatorTypes.map(creatorType => (
            <option key={creatorType} value={creatorType}>{creatorType}</option>
          ))}
        </select>

        {/* Status Filter */}
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All Statuses</option>
          {uniqueStatuses.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
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
                <Link to={'/view'} state={{ ID, name, description, creator, creatorType, status }}>
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
