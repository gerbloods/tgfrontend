import React from 'react';
import './App.css';
import { useTelegram } from './telegramHook.jsx'
// import axios from 'axios';

// const serverPort = 'http://localhost:4000'

// const $host = axios.create({
//   baseURL: serverPort
// })

// const getUserinfo = async () => {
//   const { data } = $host.get('/userinfo')
//   return data
// }

// function useTelegram() {
//     const tg = window.Telegram.WebApp;
//     if (!tg) {
//       console.warn('Telegram WebApp not available');
//       return {};
//     }

//     const onClose = () => {
//         tg?.close();
//     };

//     const onToggleButton = () => {
//         if (!tg) return;
//         if (tg.MainButton.isVisible) {
//             tg.MainButton.hide();
//         } else {
//             tg.MainButton.show();
//         }
//     };

//     return {
//         onClose,
//         onToggleButton,
//         tg,
//         user: tg?.initDataUnsafe?.user,
//     };
// }

const App: React.FC = () => {

  const { onToggleButton, user } = useTelegram();
  const trol = () => {
    alert('Ты взломан')
  }

    return (
        <div className="container">
            <div className="centered-text">Привет, {user?.first_name}!</div>
            <div className="user-info">
                <p>ID: {user?.id}</p>
                <p>Имя: {user?.first_name}</p>
                <p>Имя пользователя: {user?.username}</p>
            </div>
            <button className="bottom-button" /*onClick={onToggleButton}*/ onClick={trol}>Нажми меня</button>
        </div>
    );
};

export default App;