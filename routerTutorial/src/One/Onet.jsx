import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Onet = () => {
  return (
    <div>
        <h1>About</h1>
        <div>
            <NavLink to='/'>Home</NavLink> 
            <NavLink to='/about'>About</NavLink>
        </div>
        <main>
            <Outlet /> {/* This will render any nested routes */}
        </main>
    </div>
  );
};

export default Onet;
