import { useState } from "react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import './HamburgerDropDown.css';
import { useDropDown } from "../../context/DropDownContext";

const HamburgerDropDown = () => {
  const currentUser = useSelector(state => state.session.user)
  const {setOpen} = useDropDown();


  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div className="drop-down-container">
      <i
        class="fa-solid fa-x x-button"
        onClick={closeMenu}
      ></i>
      <li>
        <NavLink
          className='navlink drop-down-link'
          to='/items'
          exact={true}
          activeClassName='active'>
          Store
        </NavLink>
      </li>
      <li>
        <NavLink
          className='navlink drop-down-link'
          to='/items/1'
          exact={true}
          activeClassName='active'>
          Banana
        </NavLink>
      </li>
      <li>
        <NavLink
          className='navlink drop-down-link'
          to='/items/2'
          exact={true}
          activeClassName='active'>
          Banana Pro
        </NavLink>
      </li>
      <li>
        <NavLink
          className='navlink drop-down-link'
          to='/items/3'
          exact={true}
          activeClassName='active'>
          Banana Bunch
        </NavLink>
      </li>
      <li>
        <NavLink
          className='navlink drop-down-link'
          to='/items/5'
          exact={true}
          activeClassName='active'>
          Banano
        </NavLink>
      </li>
      {!currentUser &&
        <>
          <li>
            <NavLink
              className='navlink drop-down-link'
              to='/login'
              exact={true}
              activeClassName='active'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navlink drop-down-link'
              to='/sign-up'
              exact={true}
              activeClassName='active'>
              Sign Up
            </NavLink>
          </li>
        </>}
      {currentUser &&
        <>
          <li>
            <NavLink
              className='navlink drop-down-link'
              to='/reviews/current'
              exact={true}
              activeClassName='active'>
              Your Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navlink drop-down-link'
              to='/orders/current'
              exact={true}
              activeClassName='active'>
              Your Orders
            </NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
        </>
      }
    </div >
  )
}



export default HamburgerDropDown;
