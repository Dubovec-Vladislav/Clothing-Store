// General
import React, { FC, useEffect, useState } from 'react'
import style from './index.module.scss'
// Components
import { Button } from 'shared/ui'
import { useAddEmailMutation } from '../api'
// Img
import letter from '../img/letter.svg'
import spinner from '../img/spinner.svg'

export const NewsSubscription: FC = (props) => {
  const [addEmailMutation, { isLoading, isError }] = useAddEmailMutation();
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isShowMessage, setIsShowMessage] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const handleClick = () => {
    addEmailMutation(email);
    setFormSubmitted(true);
  }

  useEffect(() => {
    if (formSubmitted && !isLoading) { // Если форма была отправлена и загрузка закончилась, то показываем на некоторое время сообщение
      setIsShowMessage(true);
      setEmail('');
      setTimeout(() => {
        setIsShowMessage(false);
      }, 1500);
    }
  }, [formSubmitted, isLoading]);

  console.log(isError);

  return (
    <section className={style.block}>
      <div className={style.body}>
        {isLoading ?
          <div className={style.loadingBlock}>
            <div className={style.spinner}><img src={spinner} alt="spinner" /></div>
          </div>
          : isShowMessage
            ? isError
              ? <div className={style.loadingBlock}><div className={style.messageText}>Упс... кажется что-то пошло не так</div></div>
              : <div className={style.loadingBlock}><div className={style.messageText}>Спасибо за подписку!</div></div>
            : <></>
        }
        <div className={style.row}>
          <div className={style.left}>
            <div className={style.text}>Будьте в курсе о наших последних предложениях</div>
          </div>
          <div className={style.right}>
            <div className={style.input}>
              <img src={letter} alt="letter" />
              <input type="text" placeholder="Введите вашу почту" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={style.btn} onClick={handleClick}>
              <Button text={'Подписаться на рассылку'} color={"000"} fill={"#fff"} />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
