import React, { FC } from 'react'
import style from './index.module.scss'
import { Header } from 'widgets/header'
import { ClothesConstructor } from 'widgets/clothes-constructor'

export const SingleClothPage: FC = (props) => {
  return (
    <main className={style.block}>
      <div className={style.body}>
        <Header />
        <ClothesConstructor />
      </div>
    </main>
  );
};
