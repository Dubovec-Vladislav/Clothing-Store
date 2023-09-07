import React, { FC } from 'react'
import style from './index.module.scss'

export const ClothingBlock: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        ClothingBlock
      </div>
    </section>
  );
};
