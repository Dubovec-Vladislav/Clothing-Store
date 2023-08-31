import React, { FC, useEffect, useState } from 'react'
import style from './index.module.scss'
import { BreadCrumbs, Button, Rating } from 'shared/ui'
import { CartCounterBtn } from 'features/cart-counter-btn'
import { ColorSelectionLine } from 'features/color-selection-line'
import { SizeSelectionLine } from 'features/size-selection-line'
import { ImageObject, useGetClothByIDQuery } from '../api'

interface ClothesConstructorProps {
  clothId: string | undefined,
}

export const ClothesConstructor: FC<ClothesConstructorProps> = ({ clothId }) => {
  const { data, isLoading } = useGetClothByIDQuery(clothId || '');

  const colorsList: string[] = [];
  data?.imageObjects.forEach(imageObject => colorsList.push(imageObject.color));

  const [numOfClothes, changeNumOfClothes] = useState<number>(1);
  const [selectedColor, changeSelectedColor] = useState<string>('');
  const [selectedSize, changeSelectedSize] = useState<number>(0);
  const [activeImageObject, setActiveImageObject] = useState<ImageObject>();

  const handleColorClick = (i: number) => {
    changeSelectedColor(colorsList[i]);
    setActiveImageObject(data?.imageObjects[i]);
  };

  useEffect(() => {
    if (data) {
      changeSelectedColor(data.imageObjects[0].color);
      changeSelectedSize(data.sizeList[0]);
      setActiveImageObject(data.imageObjects[0]);
    }
  }, [data]);

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.breadCrumbs}><BreadCrumbs /></div>
        <div className={style.clotheConstructor}>
          {isLoading
            ? <div style={{ paddingLeft: "20px" }}>Идет загрузка одежды...</div>
            : data
              ? <>
                <div className={style.imgPart}>
                  <div className={style.images}>
                    {activeImageObject?.images.map((img, i) => (
                      <div key={i} className={style.imgItem}>
                        <img src={img} alt={`cloth-img ${i}`} />
                      </div>
                    ))}
                  </div>
                  <div className={style.previewImg}>
                    <div className={style.previewItem}><img src={activeImageObject?.previewImg} alt="preview-img" /></div>
                  </div>
                </div>
                <div className={style.optionPart}>
                  <div className={style.title}>{data.name}</div>
                  <div className={style.rating}><Rating rating={data.rating} /></div>
                  <div className={style.prices}>
                    <div className={style.price}>{data.price}₽</div>
                    <div className={style.prevPrice}>{data.prevPrice}₽</div>
                    <div className={style.percent}>{Math.round(data.price * 100 / data.prevPrice) - 100}%</div>
                  </div>
                  <div className={style.description}><span>{data.description}</span></div>
                  <div className={style.colors}>
                    <div className={style.colorLabel}>Выберите цвет</div>
                    <ColorSelectionLine colorsList={colorsList} selectedColor={selectedColor} handleColorClick={handleColorClick} />
                  </div>
                  <div className={style.sizes}>
                    <div className={style.sizeLabel}>Выберите размер</div>
                    <SizeSelectionLine sizeList={data.sizeList} selectedSize={selectedSize} changeSelectedSize={changeSelectedSize} />
                  </div>
                  <div className={style.footer}>
                    <div className={style.counterBtn}><CartCounterBtn number={numOfClothes} changeNumber={changeNumOfClothes} /></div>
                    <div className={style.btn}><Button text={"Добавить в корзину"} /></div>
                  </div>
                </div>
              </>
              : <div>Упс... кажется что-то пошло не так</div>
          }
        </div>
      </div>
    </section>
  );
};
