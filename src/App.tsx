import React from 'react';
import './App.css';
import { useTelegram } from './telegramHook.jsx';
import { Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import MenuComponent from './menuComponent.js';
import ProfileComponent from './profileComponent.js';


const Home: React.FC = () => {
  const { user } = useTelegram();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="centered-text">Привет, {user?.first_name}!</div>
      <button className="bottom-button" onClick={() => navigate('/profile')}>Действия</button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;