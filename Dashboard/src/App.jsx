import './App.css';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import TemplatesTable from './TemplatesTable';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import ViewTemplate from './ViewTemplate';
import Edit from './Edit';
import Create from './Create';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); // Create an AbortController
    const { signal } = abortController; // Get the signal from the controller

    const fetchData = async () => {
      try {
        const response = await fetch('/templates.json', { signal }); // Pass the signal to fetch
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted'); // Handle fetch abort
        } else {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    // Cleanup function to abort the fetch request when the component unmounts
    return () => {
      abortController.abort(); // Abort the fetch request
    };
  }, []); // Empty array means this runs only on mount and unmount

  const updateTemplate = (updatedTemplate) => {
    setData((prevData) =>
      prevData.map((template) =>
        template.ID === updatedTemplate.ID ? updatedTemplate : template
      )
    );
  };

  const deleteTemplate = (idToDelete) => {
    setData((prevData) => prevData.filter((template) => template.ID !== idToDelete));
  };

  const addTemplate = (newTemplate) => {
    setData((prevData) => [...prevData, newTemplate]);
  };

  // Router setup
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<TemplatesTable data={data} deleteTemplate={deleteTemplate} />} />
        <Route path="/view" element={<ViewTemplate />} />
        <Route path="/edit" element={<Edit updateTemplate={updateTemplate} />} />
        <Route path="/create" element={<Create addTemplate={addTemplate} />} />
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
