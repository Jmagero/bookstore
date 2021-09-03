import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

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
      <nav className={styles.NavBar}>
        <h1 className={styles.BookstoreTitle}>
          BookStore JM
        </h1>
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink className={styles.BOOKS} to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
