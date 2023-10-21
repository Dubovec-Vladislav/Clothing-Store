import React, { FC } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

interface FooterItemProps {
  title: string;
  links: string[];
}

export const FooterItem: FC<FooterItemProps> = ({ title, links }) => {
  return (
    <>
      <div className={style.title}>{title}</div>
      <div className={style.linksBlock}>
        {links.map((link, i) => (
          <Link key={i} to="#" className={style.link}>
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};
