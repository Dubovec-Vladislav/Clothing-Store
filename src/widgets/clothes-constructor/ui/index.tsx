import React, { FC, useState } from 'react'
import style from './index.module.scss'
import { BreadCrumbs, Button, Rating } from 'shared/ui'
import { CartCounterBtn } from 'features/cart-counter-btn'
import { ColorSelectionLine } from 'features/color-selection-line'
import { SizeSelectionLine } from 'features/size-selection-line'

export const ClothesConstructor: FC = (props) => {
  const colorsList = ["#4F4631", "#314F4A", "#31344F",];
  const sizeList = [44, 46, 48, 50,];

  const [numOfClothes, changeNumOfClothes] = useState<number>(1);
  const [selectedColor, changeSelectedColor] = useState<string>(colorsList[0]);
  const [selectedSize, changeSelectedSize] = useState<number>(sizeList[0]);

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.breadCrumbs}><BreadCrumbs /></div>
        <div className={style.clotheConstructor}>
          <div className={style.imgPart}>
            <div className={style.images}>
              <div className={style.imgItem}><img src="https://a.lmcdn.ru/product/R/T/RTLACQ117101_19838655_2_v1.jpg" alt="cloth-img" /></div>
              <div className={style.imgItem}><img src="https://a.lmcdn.ru/product/R/T/RTLACQ117101_19838656_3_v1.jpg" alt="cloth-img" /></div>
              <div className={style.imgItem}><img src="https://a.lmcdn.ru/product/R/T/RTLACQ117101_20884587_9_v1.jpg" alt="cloth-img" /></div>
            </div>
            <div className={style.previewImg}>
              <img src="https://a.lmcdn.ru/product/R/T/RTLACQ117101_19838654_1_v1.jpg" alt="preview-img" />
            </div>
          </div>
          <div className={style.optionPart}>
            <div className={style.title}>Мятная рубашка</div>
            <div className={style.rating}><Rating rating={4.5} /></div>
            <div className={style.prices}>
              <div className={style.price}>260₽</div>
              <div className={style.prevPrice}>520₽</div>
              <div className={style.percent}>-50%</div>
            </div>
            <div className={style.description}>
              <span>
                Эта рубашка мятного цвета идеально подойдет для любого случая.
                Изготовленная из мягкой и дышащей ткани, она обеспечивает непревзойденный комфорт и стиль.
              </span>
            </div>
            <div className={style.colors}>
              <div className={style.colorLabel}>Выберите цвет</div>
              <ColorSelectionLine colorsList={colorsList} selectedColor={selectedColor} changeSelectedColor={changeSelectedColor} />
            </div>
            <div className={style.sizes}>
              <div className={style.sizeLabel}>Выберите размер</div>
              <SizeSelectionLine sizeList={sizeList} selectedSize={selectedSize} changeSelectedSize={changeSelectedSize}/>
            </div>
            <div className={style.footer}>
              <div className={style.counterBtn}><CartCounterBtn number={numOfClothes} changeNumber={changeNumOfClothes} /></div>
              <div className={style.btn}><Button text={"Добавить в корзину"} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
