import React, { FC } from 'react'
import style from './index.module.scss'
import { ClothRow } from '../ui'
import { useGetTopSellingClothQuery } from '../api'

interface TopSellingCloseRowProps {
  titleText: string,
}

export const TopSellingCloseRow: FC<TopSellingCloseRowProps> = ({ titleText }) => {
  const { data, isLoading } = useGetTopSellingClothQuery('');

  return (
    <ClothRow titleText={titleText} data={data} isLoading={isLoading} />
  );
};