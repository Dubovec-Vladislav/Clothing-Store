import React, { ChangeEvent, FC } from 'react'
import './style.scss'

interface InputRangeProps {
  minPrice: number,
  setMinPrice: (newPrice: number) => void,
  maxPrice: number,
  setMaxPrice: (newPrice: number) => void,
}

export const InputRange: FC<InputRangeProps> = ({ minPrice, setMinPrice, maxPrice, setMaxPrice, }) => {
  const ONE_PERCENT_IN_RUBLES = 50; // Max value -> 50 * 100 = 5000
  minPrice /= ONE_PERCENT_IN_RUBLES;
  maxPrice /= ONE_PERCENT_IN_RUBLES;

  return (
    <div>
      <div className="input-range__block">
        <div className="input-range__item">
          <input className='input-range__input'
            type="range"
            min="5"
            max="100"
            value={minPrice}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              parseInt(e.target.value) <= maxPrice - 15 && setMinPrice(parseInt(e.target.value) * ONE_PERCENT_IN_RUBLES)
            }
          />
          <div className="input-range__bgLine input-range__bgLine_1" style={{ width: `${minPrice + 1}%` }}>
            <div className="input-range__price" style={{ right: `${-10 + minPrice / 20}px` }}>{minPrice * ONE_PERCENT_IN_RUBLES}</div>
          </div>
        </div>
        <div className="input-range__item">
          <input className='input-range__input'
            type="range"
            min="0"
            max="100"
            value={maxPrice}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              parseInt(e.target.value) >= minPrice + 15 && setMaxPrice(parseInt(e.target.value) * ONE_PERCENT_IN_RUBLES)
            }
          />
          <div className="input-range__bgLine input-range__bgLine_2" style={{ width: `${101 - maxPrice}%` }}>
            <div className="input-range__price" style={{ left: `${-0.3 * maxPrice}px` }}>{maxPrice * ONE_PERCENT_IN_RUBLES}</div>
          </div>
        </div>

      </div>
      {/* {`minPrice - ${minPrice}, maxPrice - ${maxPrice}`} */}
    </div>
  );
};