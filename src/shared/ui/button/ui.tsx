import React, { FC } from "react";
import style from "./index.module.scss";

interface ButtonProps {
  text: string;
  color?: string;
  fill?: string;
  borderFill?: string;
  hoverFill?: string;
}

export const Button: FC<ButtonProps> = ({
  text,
  color,
  fill,
  borderFill,
  hoverFill,
}) => {
  const propsStyle = {
    color: color || "#fff",
    backgroundColor: fill || "#000",
    border: `1px solid ${borderFill}` || "",
  };

  return (
    <div className={style.block} style={propsStyle}>
      {text}
      <span
        className={style.border}
        style={{ borderColor: hoverFill || "#fff" }}
      ></span>
    </div>
  );
};
