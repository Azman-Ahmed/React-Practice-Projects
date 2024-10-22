import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import TemplatesTable from "./TemplatesTable";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import ViewTemplate from "./ViewTemplate";
import Edit from "./Edit";
import Create from "./Create";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMount = true;

    const fetchData = async () => {
      try {
        const response = await fetch("/templates.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        if (isMount) {
          setData(fetchedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {
      isMount = false;
    };
  }, []);

  const updateTemplate = (updatedTemplate) => {
    const updateDataIndex = data.findIndex(
      (item) => item?.ID === updatedTemplate.ID
    );
    if (updateDataIndex !== -1) {
      const updatedData = [...data];
      updatedData[updateDataIndex] = updatedTemplate;
      setData(updatedData);
    }
  };

  const deleteTemplate = (idToDelete) => {
    setData((prevData) =>
      prevData.filter((template) => template.ID !== idToDelete)
    );
  };

  const addTemplate = (newTemplate) => {
    setData((prevData) => [...prevData, newTemplate]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <TemplatesTable data={data} deleteTemplate={deleteTemplate} />
          }
        />
        <Route path="/view" element={<ViewTemplate />} />
        <Route
          path="/edit"
          element={<Edit updateTemplate={updateTemplate} />}
        />
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
        <ToastContainer /> {/* Add ToastContainer here */}
      </div>
    </div>
  );
}

export default App;
