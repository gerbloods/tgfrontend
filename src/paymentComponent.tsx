import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router';
import usdtTonImg from './assets/usdt-ton.jpeg';
import usdtEthImg from './assets/usdt-eth.jpeg';

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


  return (
  <>
      <div className="payment-page">
      <div className="payment-header">
        <h2 className="title">Продление подписки</h2>
        <p className="subtitle">Вы можете продлить подписку удобным для вас способом:</p>
      </div>

      <div className="payment-options">
        <section className="payment-option">
          <h3>Донейшн Алёрт</h3>
          <a
            href="https://www.donationalerts.com/r/reezzzkiy"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            Оплатить
          </a>
        </section>

        <img
          src={usdtTonImg}
          alt="USDT TON QR Code"
          style={{ marginBottom: '20px' }}
        />
        <img
          src={usdtEthImg}
          alt="USDT ETH QR Code"
          style={{ marginBottom: '20px' }}
        />

        <p>
          Либо же отправьте TRX или USDT на адрес:
          <br />
            <span
            onClick={handleCopy}
            style={{
              color: '#007bff',
              cursor: 'pointer',
              userSelect: 'none',
              display: 'inline-block',
              maxWidth: '400px',
              wordBreak: 'break-all',
              whiteSpace: 'pre-line',
              verticalAlign: 'top'
            }}
            >
            {walletAddress}
            {'\n'}
            {walletAddress2}
            </span>
          {copied && <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#5e3b4c',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '8px',
          fontSize: '0.9rem',
          opacity: 0.9,
        }}>
          Скопировано!
        </div>}
        </p>
      </div>
      <br />
      <button className="menu-back" onClick={() => navigate('/menu')}>
        Назад
      </button>
    </div>
</>
  );
};

export default PaymentComponent;
