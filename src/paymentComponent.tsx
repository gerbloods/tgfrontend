import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const PaymentComponent: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState<string>('3');
  const [price, setPrice] = useState<number>(5);

  const periods = [
    { label: '3 дня', value: '3', price: 5 },
    { label: '7 дней', value: '7', price: 8 },
    { label: '15 дней', value: '15', price: 13 },
    { label: '30 дней', value: '30', price: 28 },
  ];

  const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const period = e.target.value;
    setSelectedPeriod(period);
    const selected = periods.find(p => p.value === period);
    if (selected) {
      setPrice(selected.price);
    }
  };

  const handleProceedToPayment = () => {
    // Переход к оплате, передаем данные в URL
      navigate(`/payment-page?period=${selectedPeriod}&price=${price}`);
  };

    return (
    <div className="container-opl">
      <h2 className="heading-opl">Выберите период подписки</h2>

      <div className="subscriptionSection">
        <h4>Выберите период подписки:</h4>
        <select value={selectedPeriod} onChange={handlePeriodChange} className="select">
          {periods.map(period => (
            <option key={period.value} value={period.value}>
              {period.label} - {period.price}$ 
            </option>
          ))}
        </select>

        <p>Стоимость подписки: <strong>{price}$</strong></p>
      </div>

      <button onClick={handleProceedToPayment} className="button-opl-1">
        Перейти к оплате
      </button>
    </div>
  );
};



export default PaymentComponent;
