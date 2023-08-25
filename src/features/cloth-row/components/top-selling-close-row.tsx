import React, { FC } from 'react'
import { ClothRow } from '../ui'
import { useGetTopSellingClothQuery } from '../api'

interface TopSellingCloseRowProps {
  titleText: string,
  endBlockLine?: boolean,
}

export const TopSellingCloseRow: FC<TopSellingCloseRowProps> = ({ titleText, endBlockLine }) => {
  const { data, isLoading } = useGetTopSellingClothQuery('');

  return (
    <ClothRow titleText={titleText} endBlockLine={endBlockLine} data={data} isLoading={isLoading} />
  );
};