import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import tonQR from './assets/usdt-ton.jpeg';
import ethQR from './assets/usdt-eth.jpeg';
import './App.css';  // Импортируем стили

const PaymentPage: React.FC = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const selectedPeriod = params.get('period');
  const price = params.get('price');
  const navigate = useNavigate();

  const walletAddressEth = '0x0ADB34d6aD1e45864CBdDE8277114145Ed91B61';
  const walletAddressTon = 'TS4nG77xViGFv9gPvLaw2quzei8XxRXZAL';

  const [copied, setCopied] = useState<string | null>(null);  // Состояние для хранения скопированного текста

  // Функция для копирования текста
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);  // Очищаем сообщение через 2 секунды
  };

  // Обработчик подтверждения оплаты
  const handleConfirmPayment = () => {
    alert("Ожидайте подтверждение от администратора...");
    
    // Переход на профиль через 5 секунд
    setTimeout(() => {
      navigate('/profile');
    }, 5000);  // Задержка 5 секунд
  };

  return (
    <div className="payment-container">
      <h2>Оплата подписки</h2>
      <p>Вы выбрали подписку на {selectedPeriod} дней. Стоимость: <strong>{price}$</strong></p>

      <div className="qr-section">
        <div className="qr-block">
          <h4>USDT (TON)</h4>
          <img src={tonQR} alt="USDT TON QR" className="qr-image" />
          <p>
            <span 
              className="copy-text"
              onClick={() => handleCopy(walletAddressTon)}  // Копируем при клике на текст
            >
              {walletAddressTon}
            </span>
          </p>
        </div>

        <div className="qr-block">
          <h4>USDT (Ethereum)</h4>
          <img src={ethQR} alt="USDT ETH QR" className="qr-image" />
          <p>
            <span 
              className="copy-text"
              onClick={() => handleCopy(walletAddressEth)}  // Копируем при клике на текст
            >
              {walletAddressEth}
            </span>
          </p>
        </div>  
      </div>

      {copied && <div className="copied-message">Скопировано!</div>}

      <button onClick={handleConfirmPayment} className="payment-button">
        Я оплатил
      </button>
    </div>
  );
};

export default PaymentPage;
