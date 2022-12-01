
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import ShoppingCartNav from './ShoppingCartNav';


const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-links'>
        {/* TODO: UPDATE ALL LINKS IN NAVBAR */}
        <li>
          <NavLink className='navlink' to='/' exact={true} activeClassName='active'>
            <img className='navlogo' src='https://i.pinimg.com/originals/98/f4/49/98f449ac13dd8c3245333bec4bb4b7b4.png' />
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/items' exact={true} activeClassName='active'>
            Store
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/items/1' exact={true} activeClassName='active'>
            Banana
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/items/2' exact={true} activeClassName='active'>
            Banana Bunch
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/items/3' exact={true} activeClassName='active'>
            Banana Peel
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/items/4' exact={true} activeClassName='active'>
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
          <ShoppingCartNav />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
