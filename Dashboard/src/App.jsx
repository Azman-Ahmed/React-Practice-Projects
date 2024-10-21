import './App.css';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import TemplatesTable from './TemplatesTable';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import ViewTemplate from './ViewTemplate';
import Edit from './Edit';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/templates.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const updateTemplate = (updatedTemplate) => {
    setData((prevData) =>
      prevData.map((template) =>
        template.ID === updatedTemplate.ID ? updatedTemplate : template
      )
    );
  };

  const remove = {

  }

  const deleteTemplate = (idToDelete) => {
    setData((prevData) => prevData.filter((template) => template.ID !== idToDelete));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<TemplatesTable data={data} deleteTemplate={deleteTemplate}/>} />
        <Route path="/view" element={<ViewTemplate />} />
        <Route path="/edit" element={<Edit updateTemplate={updateTemplate} />} />
      </>
    )
  );

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <TopNav />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
