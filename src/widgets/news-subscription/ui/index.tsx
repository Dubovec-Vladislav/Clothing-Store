// General
import React, { FC, useEffect, useState } from 'react'
import style from './index.module.scss'
// Components
import { Button } from 'shared/ui'
// import { useAddEmailMutation, useLoginMutation } from '../api'
import { useAddEmailMutation } from '../api'
// Img
import letter from '../img/letter.svg'
import spinner from '../img/spinner.svg'
import { useForm } from 'react-hook-form'

export const NewsSubscription: FC = (props) => {
  const [addEmailMutation, { isLoading, isError }] = useAddEmailMutation();
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isShowMessage, setIsShowMessage] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    if (formSubmitted && !isLoading) { // Если форма была отправлена и загрузка закончилась, то показываем на некоторое время сообщение
      setIsShowMessage(true);
      setEmail('');
      setTimeout(() => {
        setIsShowMessage(false);
      }, 1500);
    }
  }, [formSubmitted, isLoading]);

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched" });
  const onSubmit = () => {
    addEmailMutation(email);
    setFormSubmitted(true);
  };


  // const [credentials] = useState({ username: 'user', password: 'pass', token: 'token' });
  // const [login] = useLoginMutation();

  // const handleLogin = async () => {
  //   const response = await login(credentials) as { data: any };
  // };

  return (
    <section className={style.block}>
      {/* <button onClick={handleLogin}>Login</button> */}
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
          <form className={style.right} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.input}>
              <img src={letter} alt="letter" />
              <input
                type="text"
                placeholder="Введите вашу почту"
                value={email}
                {...register("email", {
                  required: "Поле email обязательно",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Введите корректный email"
                  },
                })}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={style.points}>
                <span className={`${style.point} ${style.point3}`}></span>
                <span className={`${style.point} ${style.point1}`}></span>
                <span className={`${style.point} ${style.point2}`}></span>
              </div>
            </div>
            <button className={style.btn} type="submit">
              <Button text={'Подписаться на рассылку'} color={"000"} fill={"#fff"} />
            </button>
            <div className={style.error}>{errors?.email ? String(errors?.email?.message) : ''}</div>
          </form>
        </div>
      </div>
    </section >
  );
};
