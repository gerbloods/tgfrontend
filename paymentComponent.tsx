import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const PaymentComponent: React.FC = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const walletAddress = '0x0ADB34d6aD1e45864CBdDE8277114145Ed91B61';
  const walletAddress2 = 'TS4nG77xViGFv9gPvLaw2quzei8XxRXZAL'; // Укажи свой TRX/USDT кошелек здесь

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmPayment = () => {
    navigate('/profile');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Оплатите подписку</h2>

      <img
        src="../assets/usdt ton.jpeg" alt=""
        src="../assets/usdt eth.jpeg" alt=""
        alt="QR Code"
        style={{ marginBottom: '20px' }}
      />

      <p>
        Отправьте TRX или USDT на адрес:
        <br />
        <span
          onClick={handleCopy}
          style={{ color: '#007bff', cursor: 'pointer', userSelect: 'none' }}
        >
          {walletAddress}
          {walletAddress2}
        </span>
        {copied && <div style={{ color: 'green' }}>Скопировано!</div>}
      </p>

      <button
        onClick={handleConfirmPayment}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Я оплатил
      </button>
    </div>
  );
};

export default PaymentComponent;
