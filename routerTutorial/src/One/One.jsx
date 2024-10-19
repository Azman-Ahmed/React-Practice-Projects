import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const One = () => {
  return (
    <div>
        <h1>Home</h1>
        <div>
            <NavLink to='/'>Home</NavLink> {/* Fixing the typo */}
            <NavLink to='/about'>About</NavLink>
        </div>
        <Outlet /> {/* This renders the child routes */}
    </div>
  );
};

export default One;
