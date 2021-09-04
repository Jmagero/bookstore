import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
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
        <div className={styles.div}>
          <div className={styles.insideDiv1}>
            <h1 className={`${styles.BookstoreTitle} ${styles.font1Bold} ${styles.blue}`}>
              BookStore JM
            </h1>
            <ul className={styles.navLinks}>
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink className={`${styles.BOOKS} ${styles.font1Bold}`} to={link.path}>{link.text}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.insideDiv2}>
            <BsFillPersonFill className={`${styles.icon} ${styles.blue}`} />
          </div>
        </div>

      </nav>
    </>
  );
};

export default NavBar;
