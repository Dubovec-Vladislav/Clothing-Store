import React, { FC, useState, useEffect, useRef } from 'react'
import style from './index.module.scss'
import { BlockTitle } from 'shared/ui'
import casual from '../img/casual.jpg'
import formal from '../img/formal.jpg'
import party from '../img/party.jpg'
import gym from '../img/gym.jpg'

export const CategoryBlock: FC = (props) => {
  const [itemStates, setItemStates] = useState([
    { animated: false },
    { animated: false },
    { animated: false },
    { animated: false },
  ]);

  const toggleAnimation = (index: number) => {
    const updatedStates = [...itemStates];
    updatedStates[index].animated = !updatedStates[index].animated;
    setItemStates(updatedStates);
  };

  const rowRef = useRef(null);
  const itemRefs = useRef([
    { current: null },
    { current: null },
    { current: null },
    { current: null },
  ]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      console.log(e.composedPath().includes(rowRef.current!));
      if (rowRef.current && !e.composedPath().includes(rowRef.current)) {
        const updatedStates = itemStates.map((itemState) => ({
          ...itemState,
          animated: false,
        }));
        setItemStates(updatedStates);
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);
  }, [itemStates]);

  return (
    <div className={style.block}>
      <div className={style.title}><BlockTitle text={'Поиск по стилю'} /></div>
      <div className={style.body}>
        <div className={style.row} ref={rowRef}>

          {itemStates.map((itemState, index) => (
            <div
              key={index}
              ref={itemRefs.current[index]}
              className={`${style.smallItem} ${itemState.animated ? style._anim : ''}`}
              onClick={() => toggleAnimation(index)}
            >
              <div className={style.itemBody}>
                <div className={style.text}>Casual</div>
                <div className={style.img}><img src={casual} alt="casual" /></div>
              </div>
            </div>
          ))}

          {/* <div className={`${style.smallItem} ${isAnimated ? style._anim : ''}`}>
            <div className={style.itemBody}>
              <div className={style.text}>Casual</div>
              <div className={style.img}><img src={casual} alt="casual" /></div>
            </div>
          </div>
          <div className={`${style.bigItem} ${isAnimated ? style._anim : ''}`}>
            <div className={style.itemBody}>
              <div className={style.text}>Formal</div>
              <div className={style.img}><img src={formal} alt="formal" /></div>
            </div>
          </div>
          <div className={`${style.bigItem} ${isAnimated ? style._anim : ''}`}>
            <div className={style.itemBody}>
              <div className={style.text}>Party</div>
              <div className={style.img}><img src={party} alt="party" /></div>
            </div>
          </div>
          <div className={`${style.smallItem} ${isAnimated ? style._anim : ''}`}>
            <div className={style.itemBody}>
              <div className={style.text}>Gym</div>
              <div className={style.img}><img src={gym} alt="gym" /></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
