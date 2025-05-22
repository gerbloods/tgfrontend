import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="centered-text-modified" style={{ fontSize: '4rem' }}>404</h1>
      <p style={{ fontSize: '1.5rem', color: '#5e3b4c', marginTop: '1rem' }}>
        Страница не найдена
      </p>
      <p style={{ color: '#5e3b4c', marginTop: '0.5rem' }}>
        Возможно, вы зашли с браузера или же вашего пользователя не существует
      </p>
    </div>
  );
};

export default NotFound404;
