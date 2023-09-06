import React, { FC } from 'react'
import style from './index.module.scss'
import { Header } from 'widgets/header';
import { BreadCrumbs } from 'shared/ui';

export const CategoryPage: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <Header />
        
      </div>
    </section>
  );
};
