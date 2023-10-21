import React, { FC } from "react";
import style from "./style.module.scss";

interface BlockTitleProps {
  text: string;
}

export const BlockTitle: FC<BlockTitleProps> = ({ text }) => {
  return <div className={style.block}>{text}</div>;
};
