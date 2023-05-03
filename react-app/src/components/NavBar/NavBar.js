import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import ShoppingCartNav from './ShoppingCartNav';


const NavBar = () => {
  const currentUser = useSelector(state => state.session.user)

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
            Banana Pro
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/items/3' exact={true} activeClassName='active'>
            Banana Bunch
          </NavLink>
        </li>
        <li>
          <NavLink className='navlink' to='/items/5' exact={true} activeClassName='active'>
            Banano
          </NavLink>
        </li>
        {!currentUser &&
          <>
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
          </>}
        {currentUser &&
          <>
            <li>
              <NavLink className='navlink' to='/reviews/current' exact={true} activeClassName='active'>
                Your Reviews
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to='/orders/current' exact={true} activeClassName='active'>
                Your Orders
              </NavLink>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        }
        <li>
          <ShoppingCartNav />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
