import React, { useEffect, useState } from 'react'; // ✅ useState добавлен
import './App.css';
import { useTelegram } from './telegramHook.jsx';
import { Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import MenuComponent from './menuComponent.js';
import ProfileComponent from './profileComponent.js';
import PaymentComponent from './paymentComponent.js';
import axios from 'axios';
import { SERVER } from './const.js';
import NotFound404 from './NotFound404.js';
import PaymentPage from './paymentPage.js';

const Home: React.FC = () => {
  const { user } = useTelegram();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user?.id) return navigate('/notfound');

    const fetchUserInfo = async () => {
      try {
        await axios.post(`${SERVER}/marzuserinfo`, {
          telegram_id: user.id,
        });
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          navigate('/notfound');
          return;
        }

        setError('Не удалось получить данные пользователя');
        alert(err.message || 'Произошла ошибка');
      }
    };

    fetchUserInfo();
  }, [user, navigate]);

  return (
    <div className="container">
      <div className="centered-text">Привет, {user?.first_name}!</div>
      <button className="bottom-button" onClick={() => navigate('/menu')}>Действия</button>
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
        <Route path="/payment" element={<PaymentComponent />} />
        <Route path="/payment-page" element={<PaymentPage />} />
        <Route path="/notfound" element={<NotFound404 />} />
        <Route path="*" element={<NotFound404 />} /> {/* 👍 универсальная защита */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
