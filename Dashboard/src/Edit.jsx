import './App.css';
import React, { useState } from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';


const Edit = ({ updateTemplate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ID, name, description, creator, creatorType, status } = location.state || {};

  const [formData, setFormData] = useState({
    ID,
    name,
    description,
    creator,
    creatorType,
    status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    updateTemplate(formData); ///from App.jsx
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Template</h2>
      <form className='form-container' onSubmit={handleSubmit}> 
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Creator:
          <input type="text" name="creator" value={formData.creator} onChange={handleChange} />
        </label>
        <label>
          Creator Type:
          <input type="text" name="creatorType" value={formData.creatorType} onChange={handleChange} />
        </label>
        <label>
          Status:
          <input type="text" name="status" value={formData.status} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button> 
        <Link to={'/'}>
            <button>Back to Home</button>
        </Link>
      </form>
    </div>
  );
};

export default Edit;
