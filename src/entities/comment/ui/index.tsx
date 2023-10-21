import React, { FC } from "react";
import style from "./index.module.scss";
import { Rating } from "shared/ui";
import check from "../img/check.svg";

export interface Comment {
  rating: number;
  name: string;
  text: string;
  timeSinceCreatedDate?: number;
}

export const CommentCard: FC<Comment> = ({
  rating,
  name,
  text,
  timeSinceCreatedDate,
}) => {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.rating}>
          <Rating rating={rating} />
        </div>
        <div className={style.name}>
          {name}
          <img src={check} alt="check" />
        </div>
        <div className={style.text}>“{text}”</div>
        {timeSinceCreatedDate && (
          <div className={style.data}>
            Опубликовано {timeSinceCreatedDate} дня (дней) назад
          </div>
        )}
      </div>
    </div>
  );
};
