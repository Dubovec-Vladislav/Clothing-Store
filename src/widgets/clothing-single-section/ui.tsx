// General
import React, { FC, useEffect, useState } from 'react'
import style from './style.module.scss'
// Components
import { Button, Rating } from 'shared/ui'
import { ColorSelectionLine } from 'features/color-selection-line'
import { SizeSelectionLine } from 'features/size-selection-line'
import { CartCounterBtn } from 'features/cart-counter-btn'
// Api
import { ImageObjectInterface, getClothingItemById } from 'app/commonApi'
import { useDispatch } from 'react-redux'
// Slice
import { addClothingItem } from 'widgets/cart-section'
import { BtnSuccessLoader } from 'shared/loaders/btn-success-loader'
import { ClothingImgSlider } from 'widgets/clothing-img-slider'

interface ClothingSingleSectionProps {
  clothId: string,
}

export const ClothingSingleSection: FC<ClothingSingleSectionProps> = ({ clothId }) => {
  const dispatch = useDispatch()
  const { data, isLoading } = getClothingItemById(clothId!);
  // const isLoading = true

  useEffect(() => {
    if (data) {
      changeSelectedColor(data.imageObjects[0].color);
      setSelectedSize(data.sizesList[0]);
      setActiveImageObject(data.imageObjects[0]);
    }
  }, [data]);

  const colorsList: string[] = [];
  data?.imageObjects.forEach(imageObject => colorsList.push(imageObject.color));

  const [numOfClothing, changeNumOfLocalClothing] = useState<number>(1);
  const [selectedColor, changeSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [activeImageObject, setActiveImageObject] = useState<ImageObjectInterface>();
  const [isSuccessAddition, toggleSuccessAddition] = useState<boolean>(false);
  const [isLoadingAddition, toggleLoadingAddition] = useState<boolean>(false);
  const [isSliderActive, toggleSliderActive] = useState<boolean>(false);
  const [activeSlideImg, setActiveSlideImg] = useState<string>('');

  const handleColorClick = (i: number) => {
    changeSelectedColor(colorsList[i]);
    setActiveImageObject(data?.imageObjects[i]);
  };

  const handleAddToCartClick = () => {
    const clothingItem = {
      id: clothId,
      previewImg: activeImageObject?.previewImg || "",
      name: data?.name || "",
      price: data?.price || -1,
      color: selectedColor,
      size: selectedSize,
      numOfClothing: numOfClothing,
    };

    toggleLoadingAddition(true);
    dispatch(addClothingItem(clothingItem));
    setTimeout(() => {
      toggleLoadingAddition(false);
      toggleSuccessAddition(true);
      setTimeout(() => {
        toggleSuccessAddition(false);
      }, 1500);
    }, 1000);
  };

  const sliderList = activeImageObject && [activeImageObject.previewImg, ...activeImageObject.images];

  const handleImgClick = (activeSlideImg: string) => {
    toggleSliderActive(true);
    setActiveSlideImg(activeSlideImg);
  };

  // const imgPartRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     imgPartRef.current && !e.composedPath().includes(imgPartRef.current) && toggleSliderActive(false);
  //   };
  //   document.body.addEventListener('click', handleClickOutside);
  //   return () => document.body.removeEventListener('click', handleClickOutside);
  // }, []);

  return (
    <section className={style.block}>
      <div className={isSliderActive ? `${style.activeClothingImgSlider} ${style.clothingImgSlider}` : `${style.clothingImgSlider}`}>
        <ClothingImgSlider sliderList={sliderList} toggleSliderActive={toggleSliderActive} activeSlideImg={activeSlideImg} />
      </div>
      <div className={style.body}>
        {/* <div className={style.breadCrumbs}><BreadCrumbs /></div> */}
        <div className={style.clothingSingleSection}>
          {isLoading
            ? <div style={{ paddingLeft: "20px" }} className={style.loader}>Идет загрузка одежды...</div>
            : data
              ? <>
                <div className={style.imgPart}>
                  <div className={style.images}>
                    {activeImageObject?.images.map((img, i) => (
                      <div key={i} className={style.imgItem} onClick={() => handleImgClick(img)}>
                        <img src={img} alt={`cloth-img ${i}`} />
                      </div>
                    ))}
                  </div>
                  <div className={style.previewImg} onClick={() => handleImgClick(activeImageObject!.previewImg)}>
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
                    <SizeSelectionLine sizesList={data.sizesList} selectedSize={selectedSize} handleSizeClick={setSelectedSize} />
                  </div>
                  <div className={style.footer}>
                    <div className={style.counterBtn}><CartCounterBtn number={numOfClothing} changeNumber={changeNumOfLocalClothing} /></div>
                    <div className={style.btnBlock}>
                      {isLoadingAddition && <div className={style.loadingAddition}><BtnSuccessLoader /></div>}
                      {isSuccessAddition && <div className={style.successAddition}>Добавлено ✔</div>}
                      <div className={style.btn} onClick={handleAddToCartClick}><Button text={"Добавить в корзину"} /></div>
                    </div>
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
