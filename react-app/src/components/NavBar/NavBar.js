
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'


const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-links'>
        {/* TODO: UPDATE ALL LINKS IN NAVBAR */}
        <li>
          <NavLink className='navlink' to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/login' exact={true} activeClassName='active'>
            Store
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/login' exact={true} activeClassName='active'>
            Banana
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/login' exact={true} activeClassName='active'>
            Banana Bunch
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/login' exact={true} activeClassName='active'>
            Banana Peel
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/login' exact={true} activeClassName='active'>
            Banano
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/sign-up' exact={true} activeClassName='active'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/sign-up' exact={true} activeClassName='active'>
            <i class="fa-solid fa-bag-shopping"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
