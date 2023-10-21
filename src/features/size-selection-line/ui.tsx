import React, { FC } from "react";
import style from "./style.module.scss";

interface SizeSelectionLineProps {
  sizesList: number[];
  selectedSize?: number;
  selectedSizesList?: number[];
  handleSizeClick: (newSizeIndex: number) => void;
}

export const SizeSelectionLine: FC<SizeSelectionLineProps> = React.memo(
  ({ sizesList, selectedSize, selectedSizesList, handleSizeClick }) => {
    return (
      <div className={style.row}>
        {selectedSizesList
          ? sizesList.map((size, i) =>
              selectedSizesList.includes(size) ? (
                <div
                  key={i}
                  className={`${style.item} ${style.selectedItem}`}
                  onClick={() => handleSizeClick(i)}
                >
                  {size}
                </div>
              ) : (
                <div
                  key={i}
                  className={style.item}
                  onClick={() => handleSizeClick(i)}
                >
                  {size}
                </div>
              )
            )
          : sizesList.map((size, i) =>
              size === selectedSize ? (
                <div key={i} className={`${style.item} ${style.selectedItem}`}>
                  {size}
                </div>
              ) : (
                <div
                  key={i}
                  className={style.item}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              )
            )}
      </div>
    );
  }
);
