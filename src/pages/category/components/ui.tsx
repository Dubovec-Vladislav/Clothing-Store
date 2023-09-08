// General
import React, { FC, useState } from 'react'
import style from './index.module.scss'
// Components
import { Filters } from 'widgets/filters'
import { ClothingBlock } from 'widgets/clothing-block'
// Api
import { getClothingItemsByPage } from 'app/api'

export const CategoryContent: FC = (props) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageLimit,] = useState<number>(9);
  const [selectedColorList, changeSelectedColorList] = useState<string[]>([]);
  const { data, isLoading } = getClothingItemsByPage({ page: pageNumber, limit: pageLimit });

  return (
    <div className={style.content}>
      <Filters data={data} isLoading={isLoading} selectedColorList={selectedColorList} changeSelectedColorList={changeSelectedColorList} />
      <ClothingBlock data={data} isLoading={isLoading} />
    </div>
  );
};
