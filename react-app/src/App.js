import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import LandingPage from './components/LandingPage';
import CurrentUserReviews from './components/reviews';
import { useCart } from './context/CartContext';
import AllItemsPurchasePage from './components/ProductPurchasePage';
import SingleItemPage from './components/ProductPurchasePage/SingleItemPage';
import Checkout from './components/Checkout';
import ThankYouPage from './components/Checkout/ThankYouPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const {cart, setCart} = useCart()
  const currentUser = useSelector(state => state.session.user)

  useEffect(() => {
    if(localStorage.getItem(currentUser?.email || 'default')){
      setCart(JSON.parse(localStorage.getItem(currentUser?.email || 'default')))
    } else {
      setCart([])
    }
  }, [currentUser])

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <LandingPage />
        </Route>
        <Route path='/items/:itemId'>
          <SingleItemPage />
        </Route>
        <Route path='/items'>
          <AllItemsPurchasePage />
        </Route>
        <ProtectedRoute path='/reviews/current'>
          <CurrentUserReviews />
        </ProtectedRoute>
        <Route path='/cart/current'>
          <Checkout />
        </Route>
        <Route path='/thank-you'>
          <ThankYouPage />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
