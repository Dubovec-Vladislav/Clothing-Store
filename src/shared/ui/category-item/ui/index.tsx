import React, { FC } from 'react'
import style from './index.module.scss'
import { NavLink, useParams } from 'react-router-dom'

interface CategoryItemProps {
  path: string,
  text: string,
};

export const CategoryItem: FC<CategoryItemProps> = ({ path, text }) => {
  const { id } = useParams<{ id: string }>();
  const categoryRow = `/category/${id}`
  return (
    <>
      {path !== categoryRow &&
        <NavLink
          className={({ isActive }) => isActive ? `${style.categoryItem} ${style.activeCategoryItem}` : `${style.categoryItem}`}
          to={path}
        >
          <span>{text}</span>
        </NavLink>}
    </>
  );
};
