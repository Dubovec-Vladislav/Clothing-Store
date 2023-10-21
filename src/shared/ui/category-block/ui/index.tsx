// General
import React, { FC, useState, useEffect, useRef } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
// Components
import { BlockTitle } from "shared/ui";
// Images
import casual from "../img/casual.jpg";
import formal from "../img/formal.jpg";
import party from "../img/party.jpg";
import gym from "../img/gym.jpg";

export interface PhotoItem {
  src: string;
  name: string;
}

export interface ItemState {
  animated: boolean;
  size?: "large" | "small";
}

export const CategoryBlock: FC = (props) => {
  const photosMas: PhotoItem[] = [
    { src: formal, name: "Деловая" },
    { src: casual, name: "Повседневная" },
    { src: party, name: "На вечеринку" },
    { src: gym, name: "Для зала" },
  ];

  const initialItemStates: ItemState[] = [
    { animated: false },
    { animated: false, size: "large" },
    { animated: false, size: "large" },
    { animated: false },
  ];

  const [itemStates, setItemStates] = useState<ItemState[]>([
    ...initialItemStates,
  ]);

  const toggleAnimation = (index: number) => {
    const updatedStates = [...initialItemStates];
    if (itemStates[index].animated) updatedStates[index].animated = false;
    // Если свойство animated у этого item стоит в true - убираем его
    else updatedStates[index].animated = true; // То есть, если клик будет произведен по одному и тому же item, то
    setItemStates(updatedStates); // мы уберем у него свойство animated
  };

  const rowRef = useRef(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (rowRef.current && !e.composedPath().includes(rowRef.current)) {
        const updatedStates = itemStates.map((itemState) => ({
          ...itemState,
          animated: false,
        }));
        setItemStates(updatedStates);
      }
    };

    document.body.addEventListener("click", handleClick);

    return () => document.body.removeEventListener("click", handleClick);
  }, [itemStates]);

  return (
    <div className={style.block}>
      <div className={style.title}>
        <BlockTitle text={"Поиск по стилю"} />
      </div>
      <div className={style.body}>
        <div className={style.row} ref={rowRef}>
          {itemStates.map((itemState, i) => (
            <Link
              to={`/category/${i + 1}`}
              key={i}
              className={`${
                itemState.size === "large" ? style.largeItem : style.smallItem
              } ${itemState.animated ? style._anim : ""}`}
              onClick={() => toggleAnimation(i)}
              // target={"_blank"}
            >
              <div className={style.itemBody}>
                <div className={style.text}>{photosMas[i].name}</div>
                <div className={style.img}>
                  <img src={photosMas[i].src} alt={photosMas[i].name} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
