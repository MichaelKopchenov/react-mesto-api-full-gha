import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth.js';
import './styles/Auth.css';

function Register({ handleRegister }) {
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
      const {email, password} = formValue;
      auth.register(email, password)
        .then((res) => {
          if (res) {
            handleRegister(true);
            navigate('/sign-in', { replace: true });
          }
        })
        .catch((err) => { 
          console.log(err);
          handleRegister(false);
         })
    }
  
    return (
      <form 
        className="auth__form" 
        name="register-form" 
        onSubmit={ handleSubmit }
      >
        <h3 className="auth__title">Регистрация</h3>
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
        <button className="auth__save-btn">Зарегистрироваться</button>
        <Link to="/sign-in" className="auth__link">Уже зарегистрированы? Войти</Link>
      </form>
    )
  }
  export default Register;