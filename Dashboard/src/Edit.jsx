import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from './components/Form';

const Edit = ({ updateTemplate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { ID, name, description, creator, creatorType, status } = location.state;
  
  const [formData, setFormData] = useState({
    ID,
    name,
    description,
    creator,
    creatorType,
    status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTemplate(formData);
    
    toast.success("Template updated successfully!");

    navigate('/');
  };

  return (
    <div>
      <h2>Edit Template</h2>
      <Form 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        mode = "edit"
      />
    </div>
  );
};

export default Edit;
