import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = ({ addTemplate }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ID: '',
    name: '',
    description: '',
    creator: '',
    creatorType: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTemplate = { ...formData, ID: Date.now().toString() };
    console.log(newTemplate);
    addTemplate(newTemplate);
    navigate('/');
  };

  return (
    <div>
        <h2>Create New Template</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
            Description:
            <input type="text" name="description" value={formData.description} onChange={handleChange} required />
            </label>
            <label>
            Creator:
            <input type="text" name="creator" value={formData.creator} onChange={handleChange} required />
            </label>
            <label>
            Creator Type:
            <input type="text" name="creatorType" value={formData.creatorType} onChange={handleChange} required />
            </label>
            <label>
            Status:
            <input type="text" name="status" value={formData.status} onChange={handleChange} required />
            </label>
            <button type="submit">Create</button>
        </form>
    </div>

  );
};

export default Create;
