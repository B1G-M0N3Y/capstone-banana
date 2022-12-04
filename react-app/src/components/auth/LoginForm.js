import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import "./LoginForm.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const signInDemo = async ()=>{
    await dispatch(login('demo@aa.io', 'password'))
  }

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-form-page'>
      <h1>Log In.</h1>
      <form
        className='login-form'
        onSubmit={onLogin}>
        <div className='auth-errors'>
          {errors.map((error, ind) => (
            <div className='error' key={ind}>{error}</div>
          ))}
        </div>
        <div className='auth-input-container'>
          <label htmlFor='email'>Email:</label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='auth-input-container'>
          <label htmlFor='password'>Password:</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button type='submit'>Let's Go</button>
        <button onClick={signInDemo}>Demo User</button>
      </form>
    </div>
  );
};

export default LoginForm;
