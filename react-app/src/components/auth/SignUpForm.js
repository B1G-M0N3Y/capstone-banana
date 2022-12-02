import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [validationErrors, setValidationErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    const errors = []
    e.preventDefault();

    if(firstName.length < 3 || firstName.length > 40){
      errors.push('First name must be at least 3 characters and less than 40')
    }

    if(lastName.length < 3 || lastName.length > 40){
      errors.push('Last name must be at least 3 characters and less than 40')
    }

    if(password.length < 6){
      errors.push('Password must be at least 6 characters long')
    }

    if(password === repeatPassword ){
      errors.push('Passwords must match')
    }

    if (errors.length === 0) {
      const payload ={
        first_name: firstName,
        last_name: lastName,
        email,
        password
      }

      const data = await dispatch(signUp(payload));
      if (data) {
        setValidationErrors(data)
      }
    } else {
      setValidationErrors(errors)
    }
  };

  const updateFirstName= (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName= (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-form-page'>
      <h1>Sign Up.</h1>
      <form
        className='login-form'
        onSubmit={onSignUp}>
        <div className='auth-errors'>
          {validationErrors.map((error, ind) => (
            <div className='error' key={ind}>{error}</div>
          ))}
        </div>
        <div className='auth-input-container' >
          <label>First Name</label>
          <input
            type='text'
            name='username'
            onChange={updateFirstName}
            value={firstName}
            required={true}
          ></input>
        </div>
        <div className='auth-input-container' >
          <label>Last Name</label>
          <input
            type='text'
            name='username'
            onChange={updateLastName}
            value={lastName}
            required={true}
          ></input>
        </div>
        <div className='auth-input-container'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            required={true}
          ></input>
        </div>
        <div className='auth-input-container'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            required={true}
          ></input>
        </div>
        <div className='auth-input-container'>
          <label id='repeat-password'>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
