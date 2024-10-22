import React from 'react';
import { Link } from 'react-router-dom'; 

const Form = ({ formData, handleChange, handleSubmit, mode }) => {  
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Creator:
          <input
            type="text"
            name="creator"
            value={formData.creator}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Creator Type:
          <input
            type="text"
            name="creatorType"
            value={formData.creatorType}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select a status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <button type="submit">
          {mode === 'create' ? 'Create Template' : 'Update Template'}
        </button>

        <Link to="/">
          <button type="button">Back to Home</button>  
        </Link>
      </form>
    </div>
  );
};

export default Form;
