import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';
import './styles/Auth.css';

function Login({ setUserData, handleLogin }) {
    const [formValue, setFormValue] = useState({
      email: '',
      password: ''
    })
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const {name, value} = e.target;
  
      setFormValue({
        ...formValue,
        [name]: value
      });
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      auth.login(formValue.email, formValue.password)
        .then((res) => {
          if (res.token) {
            setUserData({
              email: formValue.email,
              password: formValue.password
            })
            setFormValue({ 
              email: '', 
              password: '' 
            });
            handleLogin(true);
            navigate('/', { replace: true });
          }
        })
        .catch((err) => { 
          console.log(err); 
          handleLogin(false);
        })
    }
  
    return (
      <form 
        className="auth__form" 
        name="login-form" 
        onSubmit={ handleSubmit }
      >
        <h3 className="auth__title">Вход</h3>
        <input 
            className="auth__input" 
            id="email" 
            name="email" 
            value={ formValue.email } 
            placeholder="Email" 
            type="email" 
            onChange={ handleChange } 
            required 
        />
        <input 
            className="auth__input" 
            id="password" 
            name="password" 
            value={ formValue.password } 
            placeholder="Пароль" 
            type="password" 
            onChange={ handleChange } 
            required 
        />
        <button className="auth__save-btn">Войти</button>
      </form>
    )
}

export default Login;