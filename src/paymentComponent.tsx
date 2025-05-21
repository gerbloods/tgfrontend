import React from 'react';
import './App.css';
import { useNavigate } from 'react-router';

const PaymentComponent: React.FC = () => {
  const navigate = useNavigate();

  return (
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

    <section className="payment-option">
      <h3>Оплата криптовалютой</h3>
      <div className="crypto-placeholder">
        <p>Скоро появится...</p>
      </div>
    </section>
  </div>

  <button className="bottom-button" onClick={() => navigate('/menu')}>
    Назад
  </button>
</div>

  );
};

export default PaymentComponent;
