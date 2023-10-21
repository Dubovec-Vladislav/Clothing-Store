import React, { FC, useState } from "react";
import style from "./style.module.scss";

export interface TabItem {
  tabName: string;
  field: JSX.Element;
}

interface TabsProps {
  tabsList: TabItem[];
}

export const Tabs: FC<TabsProps> = ({ tabsList }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  // Underline settings
  const underlineWidth = `${100 / tabsList.length}%`;
  const indentToUnderline = `${(100 / tabsList.length) * activeTabIndex}%`;

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.tabs}>
          {tabsList.map((item, i) => (
            <div
              key={i}
              className={style.tab}
              onClick={() => setActiveTabIndex(i)}
            >
              {item.tabName}
            </div>
          ))}
          <div
            className={style.line}
            style={{ width: underlineWidth, left: indentToUnderline }}
          ></div>
        </div>
        <div className={style.fields}>
          {tabsList.map(
            (item, i) =>
              i === activeTabIndex && (
                <div key={i} className={style.field}>
                  {item.field}
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};
