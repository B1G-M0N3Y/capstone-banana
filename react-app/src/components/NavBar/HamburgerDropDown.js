import { useState } from "react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HamburgerDropDown = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector(state => state.session.user)

  return (
    <>
      <li>
          <>
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
          </>
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
      </li>
    </>
  )
}



export default HamburgerDropDown;
