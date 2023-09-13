import React, { ChangeEvent, FC, useState } from 'react'
import './style.scss'

export const InputRange: FC = (props) => {
  const [minPrice, setMinPrice] = useState(25);
  const [maxPrice, setMaxPrice] = useState(75);

  const [width, setWidth] = useState(25);

  return (
    <div>
      <div className="input-range__block" style={{ marginBottom: "20px" }}>
        <input className='input-range__input'
          type="range"
          min="0"
          max="100"
          value={minPrice}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            parseInt(e.target.value) <= maxPrice - 10 && setMinPrice(parseInt(e.target.value)
            )}
        />
        {/* Width + 3 ? - Because in styles require left: -2px */}
        <div className="input-range__bgLine input-range__bgLine_1" style={{ width: minPrice < 50 ? `${minPrice + 3}%` : `${minPrice}%` }}></div>
        <input className='input-range__input'
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            parseInt(e.target.value) >= minPrice + 10 && setMaxPrice(parseInt(e.target.value)
            )}
        />
        {/* Width + 3 ? - Because in styles require right: -2px */}
        <div className="input-range__bgLine input-range__bgLine_2" style={{ width: maxPrice > 50 ? `${100 - maxPrice + 3}%` : `${100 - maxPrice}%` }}></div>
        <span style={{ right: maxPrice > 50 ? `${100 - maxPrice}%` : `${100 - maxPrice}%`, position: 'absolute', top: "15px"}}>50$</span>
      </div>
      {`minPrice - ${minPrice}, maxPrice - ${maxPrice}`}
    </div>
  );
};