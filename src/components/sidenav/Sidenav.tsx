import React from 'react';
import './sidenav.scss';
import { NavLink, Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
const Sidenav = () => {
  const toggleSidenav = () => {
    document.getElementById('sidenav')?.classList.toggle('active');
    document.getElementById('mainContent')?.classList.toggle('active');
  }
  return (
    <div className='sidenav active' id='sidenav'>
      <h3 className="header">
        Dev Space
        <MdClose className='d-md-none' size={'30px'} onClick={toggleSidenav} color="primary" type='button' />
      </h3>
      <ul className='m-0 p-0'>
        <li>
          <NavLink
            to={'image-generator'}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Image Generator
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'box-shadow-generator'}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Box Shadow Generator
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidenav