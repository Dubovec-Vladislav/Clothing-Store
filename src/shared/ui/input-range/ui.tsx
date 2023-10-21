import React, { ChangeEvent, FC, useCallback, useState } from "react";
import "./style.scss";
import debounce from "lodash.debounce";

interface InputRangeProps {
  minPrice: number;
  setMinPrice: (newPrice: number) => void;
  maxPrice: number;
  setMaxPrice: (newPrice: number) => void;
}

export const InputRange: FC<InputRangeProps> = ({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  const ONE_PERCENT_IN_RUBLES = 50; // Max value -> 50 * 100 = 5000
  minPrice /= ONE_PERCENT_IN_RUBLES;
  maxPrice /= ONE_PERCENT_IN_RUBLES;

  const [minValue, setMinValue] = useState<number>(minPrice);
  const [maxValue, setMaxValue] = useState<number>(maxPrice);

  const updateMinPrice = useCallback(
    debounce((price: number) => setMinPrice(price), 200),
    []
  );
  const updateMaxPrice = useCallback(
    debounce((price: number) => setMaxPrice(price), 200),
    []
  );

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = parseInt(e.target.value);
    if (price <= maxPrice - 15) {
      setMinValue(price);
      updateMinPrice(price * ONE_PERCENT_IN_RUBLES);
    }
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = parseInt(e.target.value);
    if (price >= minPrice + 15) {
      setMaxValue(price);
      updateMaxPrice(price * ONE_PERCENT_IN_RUBLES);
    }
  };

  return (
    <div>
      <div className="input-range__block">
        <div className="input-range__item">
          <input
            className="input-range__input"
            type="range"
            min="5"
            max="100"
            value={minValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleMinPriceChange(e)
            }
          />
          <div
            className="input-range__bgLine input-range__bgLine_1"
            style={{ width: `${minValue - 3}%` }}
          >
            <div
              className="input-range__price"
              style={{ right: `${-15 + minValue / 20}px` }}
            >
              {minValue * ONE_PERCENT_IN_RUBLES}
            </div>
          </div>
        </div>
        <div className="input-range__item">
          <input
            className="input-range__input"
            type="range"
            min="0"
            max="100"
            value={maxValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleMaxPriceChange(e)
            }
          />
          <div
            className="input-range__bgLine input-range__bgLine_2"
            style={{ width: `${101 - maxValue}%` }}
          >
            <div
              className="input-range__price"
              style={{ left: `${-0.3 * maxValue}px` }}
            >
              {maxValue * ONE_PERCENT_IN_RUBLES}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
