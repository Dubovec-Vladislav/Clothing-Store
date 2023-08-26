import React, { FC } from 'react'
import style from './index.module.scss'
import letter from '../img/letter.svg'
import { Button } from 'shared/ui'

export const NewsSubscription: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.left}>
          <div className={style.text}>Будьте в курсе о наших последних предложениях</div>
        </div>
        <div className={style.right}>
          <div className={style.input}>
            <img src={letter} alt="letter" />
            <input type="text" placeholder="Введите вашу почту" />
          </div>
          <div className={style.btn}><Button text={'Подписаться на рассылку'} color={"000"} fill={"#fff"} /></div>
        </div>
      </div>
    </section>
  );
};
