import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Book',
    },

    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <>
      <nav>
        <h1>
          BookStore JM
        </h1>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
