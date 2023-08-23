import React, { FC } from 'react'
import style from './index.module.scss'
import { ClothRow } from '../ui'
import { useGetNewClothQuery } from '../api'

interface NewCloseRowProps {
  titleText: string,
}

export const NewCloseRow: FC<NewCloseRowProps> = ({ titleText }) => {
  const { data, isLoading } = useGetNewClothQuery('');

  return (
    <ClothRow titleText={titleText} data={data} isLoading={isLoading}/>
  );
};