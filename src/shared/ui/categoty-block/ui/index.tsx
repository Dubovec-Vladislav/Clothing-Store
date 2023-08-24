import React, { FC } from 'react'
import style from './index.module.scss'
import { BlockTitle } from 'shared/ui'
import casual from '../img/casual.jpg'
import formal from '../img/formal.jpg'
import party from '../img/party.jpg'
import gym from '../img/gym.jpg'

export const CategoryBlock: FC = (props) => {
  return (
    <div className={style.block}>
      <div className={style.title}><BlockTitle text={'Поиск по стилю'} /></div>
      <div className={style.body}>
        <div className={style.row}>
          <div className={style.smallItem}>
            <div className={style.itemBody}>
              <div className={style.text}>Casual</div>
              <div className={style.img}><img src={casual} alt="casual" /></div>
            </div>
          </div>
          <div className={style.bigItem}>
            <div className={style.itemBody}>
              <div className={style.text}>Formal</div>
              <div className={style.img}><img src={formal} alt="formal" /></div>
            </div>
          </div>
          <div className={style.bigItem}>
            <div className={style.itemBody}>
              <div className={style.text}>Party</div>
              <div className={style.img}><img src={party} alt="party" /></div>
            </div>
          </div>
          <div className={style.smallItem}>
            <div className={style.itemBody}>
              <div className={style.text}>Gym</div>
              <div className={style.img}><img src={gym} alt="gym" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
