import React, { FC } from 'react'
import style from './index.module.scss'
import { ClothInterface, getTopSellingCloth } from 'widgets/clothes-constructor'
import { ClothCard } from 'entities/cloth-card'
import { BlockTitle, Button } from 'shared/ui'
import { Link } from 'react-router-dom'

interface ClothRowProps {
  titleText: string,
  endBlockLine?: boolean,
  top: boolean,
}

export const ClothRow: FC<ClothRowProps> = ({ titleText, endBlockLine, top }) => {
  const getHook = top ? getTopSellingCloth : getTopSellingCloth;
  const { data, isLoading } = getHook(2);

  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={titleText} /></div>
      <div className={style.body}>
        <div className={style.row}>
          {isLoading
            ? <div>Идет загрузка одежды...</div>
            : data
              ? data.map((item: any) =>
                <Link to={`cloth/${item.id}`} key={item.id} className={style.item}>
                  <ClothCard
                    imageUrl={item.imageObjects[0].previewImg}
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                  />
                </Link>
              )
              : <div>Упс... кажется что-то пошло не так</div>
          }
        </div>
        <div className={style.btn}><Button text={'View All'} color={'#000'} fill={'#fff'} borderFill={'rgba(0, 0, 0, 0.10)'} /></div>
      </div>
      {endBlockLine && <div className={style.endLine}></div>}
    </section>
  );
};