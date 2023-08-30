import React, { FC, useState } from 'react'
import style from './style.module.scss'
import { Button } from '../button'
import { CommentCard } from 'entities/comment';

interface TabItem {
  tabName: string,
  field: JSX.Element,
}

export const Tabs: FC = (props) => {
  const tabsList: TabItem[] = [
    { tabName: "О продукте", field: <Button text={"О продукте"} /> },
    { tabName: "Рейтинг и отзывы", field: <Button text={"Рейтинг и отзывы"} /> },
    { tabName: "Вопросы о товаре", field: <Button text={"Вопросы о товаре"} /> },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  // Underline settings
  const underlineWidth = `${100 / tabsList.length}%`;
  const indentToUnderline = `${100 / tabsList.length * activeTabIndex}%`;

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.tabs}>
          {tabsList.map((item, i) => <div key={i} className={style.tab} onClick={() => setActiveTabIndex(i)}>{item.tabName}</div>)}
          <div className={style.line} style={{ width: underlineWidth, left: indentToUnderline }}></div>
        </div>
        <div className={style.fields}>
          {tabsList.map((item, i) => i === activeTabIndex && <div key={i} className={style.field}>{item.field}</div>)}
        </div>
      </div>
    </section>
  );
};
