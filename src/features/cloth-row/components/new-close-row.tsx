import React, { FC } from 'react'
import { ClothRow } from '../ui'
import { useGetNewClothQuery } from '../api'

interface NewCloseRowProps {
  titleText: string,
  endBlockLine?: boolean,
}

export const NewCloseRow: FC<NewCloseRowProps> = ({ titleText, endBlockLine }) => {
  const { data, isLoading } = useGetNewClothQuery('');

  return (
    <ClothRow key={1} titleText={titleText} endBlockLine={endBlockLine} data={data} isLoading={isLoading}/>
  );
};