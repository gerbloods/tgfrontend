import React from 'react';
import './App.css';
import { useTelegram } from './telegramHook';
import { Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import MenuComponent from './menuComponent';
import ProfileComponent from './profileComponent';
import PaymentComponent from './paymentComponent';
import PaymentPage from './paymentPage';

const Home: React.FC = () => {
  const { user } = useTelegram();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="centered-text">Привет, {user?.first_name}!</div>
      <button className="bottom-button" onClick={() => navigate('/menu')}>
        Действия
      </button>
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
        <Route path="/payment" element={<PaymentComponent />} /> {/* Страница выбора времени */}
        <Route path="/payment-page" element={<PaymentPage />} /> {/* Страница с QR-кодами */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
