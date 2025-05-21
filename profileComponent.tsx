import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTelegram } from './telegramHook.jsx';
import { SERVER } from './const.js'

const ProfileComponent: React.FC = () => {
  const { user } = useTelegram();
  const [info, setInfo] = useState<null | {
    status: string;
    vlessLink: string;
    expireDate: string;
  }>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user?.id) return;

    const fetchUserInfo = async () => {
      try {
        const res = await axios.post(`${SERVER}/marzuserinfo`, {
          telegram_id: user.id,
        });

        const { status, vlessLink, expireDate } = res.data;

        setInfo({ status, vlessLink, expireDate });
      } catch (err) {
        setError('Не удалось получить данные пользователя');
        alert(err.message || 'Произошла ошибка');
      }
    };

    fetchUserInfo();
  }, [user]);


  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!info) return <div>Загрузка...</div>;

  return (
    <div>
      <h2>Профиль</h2>
      <p><strong>Статус:</strong> {info.status}</p>
      <p><strong>Срок подписки до:</strong> {info.expireDate}</p>
      <p><strong>VLESS:</strong> <a href={info.vlessLink}>{info.vlessLink}</a></p>
    </div>
  );
};

export default ProfileComponent;
