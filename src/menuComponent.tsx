import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const MenuComponent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <div className="menu-links">
        <button onClick={() => navigate("/payment")}>Продлить подписку</button>
        <button onClick={() => navigate("/profile")}>Информация о аккаунте</button>
      </div>
      <button className="bottom-button" onClick={() => navigate("/")}>Назад</button>
    </div>
  );
};

export default MenuComponent;
