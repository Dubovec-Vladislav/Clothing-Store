import React, { FC } from 'react'
import style from './index.module.scss'
import { StarsLine } from 'shared/ui'

export const Card: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        Card
        <StarsLine rating={4}/>
        <StarsLine rating={4.5}/>
      </div>
    </section>
  );
};