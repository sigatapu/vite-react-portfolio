import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "not-active")}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "not-active")}>
        About
      </NavLink>
      <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "not-active")}>
        Skills
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "not-active")}>
        Projects
      </NavLink>
      <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "not-active")}>
        Services
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "not-active")}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
