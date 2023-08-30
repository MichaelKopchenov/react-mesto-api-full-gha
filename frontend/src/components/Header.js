import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';
import './styles/Header.css'

function Header ({ userData, loggedIn }) {
  const [email, setEmail] = useState('')

  const location = useLocation();
  const navigate = useNavigate();

  const [info, setInfo] = useState({ buttonText: '', path: '' });

  useEffect(() => {
    if (location.pathname === '/sign-in') {
      setInfo({buttonText: 'Регистрация', path: '/sign-up'});
    } if (location.pathname === '/sign-up') {
      setInfo({buttonText: 'Войти', path: '/sign-in'});
    } if (location.pathname === '/') {
      setInfo({buttonText: 'Выйти', path: ''});
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/') {
      setEmail(userData.email);
    } else {
      setEmail('');
    }
  }, [location]);

  function wayBack() {
    localStorage.removeItem('token');
    navigate('/sign-in', { replace: true });
  }

  function handleClick () {
    navigate(info.path, { replace: true });
  }

  return (
    <header className="header">
      <img 
        className="header__logo" 
        src={logo} 
        alt="Логотип"
      />
      <div className="header__menu">
        <button 
            className='header__button' 
            onClick={
                loggedIn 
                ? wayBack 
                : handleClick
            }
        >
                { info.buttonText }
        </button>
        <p className='header__email'>{ email }</p>
      </div>
    </header>
  )
}

export default Header;