import React, { FC } from 'react'
import style from './index.module.scss'
import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from 'shared/ui'
import { FooterItem } from '../components'
import visa from '../img/visa.svg'
import masterCard from '../img/master-card.svg'
import payPal from '../img/pay-pal.svg'
import applePay from '../img/apple-pay.svg'
import googlePay from '../img/google-pay.svg'

export const Footer: FC = (props) => {
  return (
    <footer className={style.block}>
      <div className={style.body}>
        <div className={style.row}>
          <div className={`${style.item} ${style.firstItem}`}>
            <div className={style.logo}>Logo</div>
            <div className={style.text}>У нас есть одежда, которая соответствует вашему стилю и которую вы будите носить с гордостью.</div>
            <div className={style.icons}>
              <div className={style.icon}><TwitterIcon /></div>
              <div className={style.icon}><FacebookIcon /></div>
              <div className={style.icon}><InstagramIcon /></div>
              <div className={style.icon}><GithubIcon /></div>
            </div>
          </div>
          <div className={style.item}><FooterItem title={"Компания"} links={["О нас", "Функции", "Работы", "Карьера"]} /></div>
          <div className={style.item}><FooterItem title={"Помощь"} links={["О нас", "Функции", "Работы", "Карьера"]} /></div>
          <div className={style.item}><FooterItem title={"Вопросы"} links={["О нас", "Функции", "Работы", "Карьера"]} /></div>
          <div className={style.item}><FooterItem title={"Ресурсы"} links={["О нас", "Функции", "Работы", "Карьера"]} /></div>
        </div>
        <div className={style.footer}>
          <div className={style.rights}>© 2000-2023, Все права защищены</div>
          <div className={style.cards}>
            <div className={style.card}><img src={visa} alt="visa" /></div>
            <div className={style.card}><img src={masterCard} alt="master-card" /></div>
            <div className={style.card}><img src={payPal} alt="pay-pal" /></div>
            <div className={style.card}><img src={applePay} alt="apple-pay" /></div>
            <div className={style.card}><img src={googlePay} alt="google-pay" /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
