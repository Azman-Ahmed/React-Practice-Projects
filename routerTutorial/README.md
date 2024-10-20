- At first install the react-router Package (used Version 6.4)
```bash
npm install react-router-dom@6.4
```

## Method 1: (Old One)
Here The BrowserRouter is used inside the render scope.

```bash
return (
    <BrowserRouter>
      <NavLink to="/about">Areh</NavLink>
      <NavLink to="/">Ohho</NavLink>
      <main>
          <Routes>
          <Route path='/' element={<One/>}/>
            <Route path='/about' element={<Onet/>}/>
          </Routes>
      </main>
    </BrowserRouter>
  )
```

## Method 2: (new One)

import this in the app.jsx
```bash
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
```

This method creates a BrowserRouter and store it in an object outside return scope.

```bash
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
```

```bash
<h1>About</h1>
<div>
    <NavLink to='/'>Home</NavLink> 
    <NavLink to='/about'>About</NavLink>
</div>
<main>
    <Outlet /> {/* This will render any nested routes */}
</main>
```
