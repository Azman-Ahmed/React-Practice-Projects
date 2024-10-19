import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import One from './One/One';  // Ensure the correct case is used for import
import Onet from './One/Onet'; // Ensure the correct case is used for import

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<One/>}/>
        <Route path='/about' element={<Onet />} />
      </Route>
    )
  );
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
