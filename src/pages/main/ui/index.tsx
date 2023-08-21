import React, { FC } from 'react'
import style from './index.module.scss'
import { Hello } from '../hello'
import { Header } from 'widgets/header'

export const Main: FC = (props) => {
  return (
    <main className={style.block}>
      <div className={style.body}>
        <Header/>
        <Hello/>
      </div>
    </main>
  );
};
