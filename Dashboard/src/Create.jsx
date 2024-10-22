import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './components/Form';
import { toast } from 'react-toastify';

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
    addTemplate(newTemplate);

    toast.success("New template created successfully!");

    navigate('/');
  };

  return (
    <div>
      <h2>Create New Template</h2>
      <Form 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        mode = "create"
      />
    </div>
  );
};

export default Create;
