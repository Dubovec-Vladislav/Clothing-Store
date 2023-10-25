import React, { ChangeEvent, FC, useState } from "react";
import style from "./index.module.scss";
import { Button } from "shared/ui";
import tag from "../img/tag.svg";
import { useAppSelector } from "app/model";
import { selectCartTotalPrice } from "widgets/cart-section";

interface CheckSectionProps {
  toggleIsPopupActive: (newValue: boolean) => void;
}

export const CheckSection: FC<CheckSectionProps> = ({ toggleIsPopupActive }) => {
  const deliveryPrice = 700;
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const [tegValue, setTegValue] = useState<string>("");
  const [isTegCorrect, changeIsTegCorrect] = useState<boolean>(false);

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.title}>Итог заказа</div>
        <div className={style.positions}>
          <div className={style.position}>
            <div className={style.text}>Промежуточный итог</div>
            <div className={style.price}>{totalPrice}₽</div>
          </div>
          <div className={style.position}>
            <div className={style.text}>Скидка</div>
            <div className={`${style.price} ${style.discount}`}>
              {isTegCorrect ? -550 : 0}₽
            </div>
          </div>
          <div className={style.position}>
            <div className={style.text}>Плата за доставку</div>
            <div className={style.price}>{deliveryPrice}₽</div>
          </div>
        </div>
        <div className={style.total}>
          <div className={style.totalText}>Общая сумма</div>
          <div className={style.totalPrice}>
            {isTegCorrect
              ? totalPrice - 550 + deliveryPrice
              : totalPrice + deliveryPrice}
            ₽
          </div>
        </div>
        <div className={style.promotionalCode}>
          <div className={style.input}>
            <img src={tag} alt="tag" />
            <input
              type="text"
              value={tegValue}
              placeholder={"Промокод"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTegValue(e.target.value)
              }
            />
          </div>
          <div
            className={style.inputBtn}
            onClick={() => tegValue !== "" && changeIsTegCorrect(true)}
          >
            <Button text={"Ввести"} />
          </div>
        </div>
        <div className={totalPrice > 0 ? `${style.btnBlock}` : `${style.btnBlock} ${style.disableBtnBlock}`}>
          <div className={style.btn} onClick={() => toggleIsPopupActive(true)}>
            <Button text={"Перейти к оформлению"} />
          </div>
        </div>
      </div>
    </section>
  );
};
