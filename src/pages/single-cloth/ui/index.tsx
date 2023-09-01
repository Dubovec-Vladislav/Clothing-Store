import React, { FC, useEffect } from 'react'
import style from './index.module.scss'
import { Header } from 'widgets/header'
import { ClothingConstructor } from 'widgets/clothes-constructor'
// import { Tabs } from 'shared/ui'.
import { CommentBlock } from 'widgets/comment-block'
import { useParams } from 'react-router-dom'

export const SingleClothingPage: FC = (props) => {
  useEffect(() => window.scrollTo(0, 0), [])
  const { id } = useParams<{ id: string }>();
  
  return (
    <main className={style.block}>
      <div className={style.body}>
        <Header />
        <ClothingConstructor clothId={id} />
        {/* <Tabs/> */}
        <CommentBlock />
      </div>
    </main>
  );
};
