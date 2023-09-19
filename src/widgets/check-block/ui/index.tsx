import React, { FC } from 'react'
import style from './index.module.scss'
import { Button } from 'shared/ui'
import tag from '../img/tag.svg'

export const CheckBlock: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.title}>Итог заказа</div>
        <div className={style.positions}>
          <div className={style.position}>
            <div className={style.text}>Промежуточный итог</div>
            <div className={style.price}>4300₽</div>
          </div>
          <div className={style.position}>
            <div className={style.text}>Скидка</div>
            <div className={`${style.price} ${style.discount}`}>-500₽</div>
          </div>
          <div className={style.position}>
            <div className={style.text}>Плата за доставку</div>
            <div className={style.price}>200₽</div>
          </div>
        </div>
        <div className={style.total}>
          <div className={style.totalText}>Общая сумма</div>
          <div className={style.totalPrice}>4000₽</div>
        </div>
        <div className={style.promotionalCode}>
          <div className={style.input}><img src={tag} alt="tag" /><input type="text" placeholder={"Промокод"}/></div>
          <div className={style.inputBtn}><Button text={"Ввести"} /></div>
        </div>
        <div className={style.btn}><Button text={"Перейти к оформлению"} /></div>
      </div>
    </section >
  );
};