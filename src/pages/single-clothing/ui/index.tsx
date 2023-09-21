// General
import React, { FC, useEffect } from 'react'
import style from './index.module.scss'
// Hooks
import { useParams } from 'react-router-dom'
// Components
import { Header } from 'widgets/header'
import { ClothingConstructor } from 'widgets/clothing-constructor'
import { TabItemInterface, Tabs } from 'shared/ui'
import { CommentSection } from 'widgets/comment-section'
import { NewsSubscription } from 'widgets/news-subscription'
import { Footer } from 'widgets/footer'

export const SingleClothingPage: FC = (props) => {
  useEffect(() => window.scrollTo(0, 0), []); // Scroll to top of page
  const { id } = useParams<{ id: string }>();

  const tabsList: TabItemInterface[] = [
    { tabName: "Рейтинг и отзывы", field: <CommentSection clothId={id} /> },
    { tabName: "О продукте", field: <div>О продукте</div> },
    { tabName: "Вопросы о товаре", field: <div>Вопросы о товаре</div> },
  ];

  return (
    <main className={style.block}>
      <Header />
      <ClothingConstructor clothId={id || ''} />
      <Tabs tabsList={tabsList} />
      <NewsSubscription />
      <Footer />
    </main>
  );
};
