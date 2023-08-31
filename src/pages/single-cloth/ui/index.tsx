import React, { FC } from 'react'
import style from './index.module.scss'
import { Header } from 'widgets/header'
import { ClothesConstructor } from 'widgets/clothes-constructor'
// import { Tabs } from 'shared/ui'
import { CommentBlock } from 'widgets/comment-block'
import { useParams } from 'react-router-dom'

export const SingleClothPage: FC = (props) => {
  const params = useParams<{ id: string }>();
  console.log(params);

  return (
    <main className={style.block}>
      <div className={style.body}>
        <Header />
        <ClothesConstructor />
        {/* <Tabs/> */}
        <CommentBlock />
      </div>
    </main>
  );
};
