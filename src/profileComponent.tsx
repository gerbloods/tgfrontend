import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTelegram } from './telegramHook.jsx';
import { SERVER } from './const.js'
import { useNavigate } from 'react-router';

const ProfileComponent: React.FC = () => {
    const navigate = useNavigate();

  const { user } = useTelegram();
  const [info, setInfo] = useState<null | {
    status: string;
    vlessLink: string;
    expireDate: string;
    used_traffic: number;
    data_limit: number | null;
  }>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user?.id) return;

    const fetchUserInfo = async () => {
      try {
        const res = await axios.post(`${SERVER}/marzuserinfo`, {
          telegram_id: user.id,
        });

        const { status, vlessLink, expireDate, used_traffic, data_limit } = res.data;

        setInfo({ status, vlessLink, expireDate, used_traffic, data_limit });
      } catch (err) {
        setError('Не удалось получить данные пользователя');
        alert(err.message || 'Произошла ошибка');
      }
    };

    fetchUserInfo();
  }, [user]);

  const [copied, setCopied] = useState(false);

 


  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!info) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <p className="loading-text">Загрузка...</p>
      </div>
    );
  }
 
const handleShowLink = () => {
  if (info?.vlessLink) {
    const tempInput = document.createElement('input');
    tempInput.value = info.vlessLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
    console.log(err)
    }
    document.body.removeChild(tempInput);
  }
};
const checkTraffic = () => {
  if (!info || typeof info.data_limit !== 'number') return 'Безлимит';

  const used = Math.floor((Number(info.used_traffic) || 0) / 1048576);
  const limit = Math.floor((Number(info.data_limit) || 0) / 1073741824);

  return `${used} МБ / ${limit} ГБ`;
};
  return (
    <div className="container">
      <div className='down'>
  <h2>Профиль</h2>

  <p><strong>Статус: </strong>{info.status === 'active' ? "Активен" : "Деактивировано" }</p>
  <p>
  <strong>Срок подписки до: </strong>
  {info.expireDate && info.expireDate !== 'Без срока'
    ? new Date(Number(info.expireDate) * 1000).toLocaleDateString()
    : 'Бессрочно'}
</p>
<p><strong>Тарифный лимит: </strong>{checkTraffic()}</p>

  <div className="vless-container">
  <p><strong>Ссылка на подписку:</strong></p>
  
    <p className="vless-toggle" onClick={handleShowLink}>Скопировать</p>
    {copied && (
        <div style={{
          position: 'absolute',
          top: '30px',
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
        </div>
      )}
</div>

</div>

  <button className="menu-back" onClick={() => navigate("/menu")}>Назад</button>
</div>
  );
};

export default ProfileComponent;
