// General
import React, { ChangeEvent, FC, useState } from "react";
import style from "./index.module.scss";
import { useForm } from "react-hook-form";
// Components
import { Button } from "shared/ui/button";
import { PaySuccessLoader } from "shared/loaders/pay-success-loader";
// Img
import cross from "../img/cross.svg";

interface PayPopupProps {
  toggleIsPopupActive: (newValue: boolean) => void;
}

export const PayPopup: FC<PayPopupProps> = ({ toggleIsPopupActive }) => {
  const [isSuccessAddition, toggleSuccessAddition] = useState<boolean>(false);
  const [isLoadingAddition, toggleLoadingAddition] = useState<boolean>(false);

  const onSubmit = () => {
    toggleLoadingAddition(true);
    setTimeout(() => {
      toggleLoadingAddition(false);
      toggleSuccessAddition(true);
      setTimeout(() => {
        toggleSuccessAddition(false);
        toggleIsPopupActive(false);
      }, 1500);
    }, 1500);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  // const { mask } = useMask({
  //   name: "phone",
  //   mask: "+7 (999) 999-99-99",
  // });

  const [value, setValue] = useState("");

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.title}>Оплата</div>
        <div className={style.cross} onClick={() => toggleIsPopupActive(false)}>
          <img src={cross} alt="cross" />
        </div>
        <form className={style.items} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.item}>
            <div className={style.label}>Номер карты</div>
            <input
              className={style.input}
              type="text"
              placeholder="0123 4567 8901 2345"
              {...register("cardNumber", {
                required: "Поле с номером обязательно",
                minLength: {
                  value: 19,
                  message: "Введите корректный номер длина",
                },
                maxLength: {
                  value: 19,
                  message: "Номер карты не должен превышать 16 символов",
                },
              })}
            />
            <div className={style.error}>
              {errors?.cardNumber && String(errors?.cardNumber?.message)}
            </div>
          </div>

          <div className={style.item}>
            <div className={style.label}>Имя держателя карты</div>
            <input
              className={style.input}
              type="text"
              placeholder="BAZAROV OLEG"
              {...register("cardName", {
                required: "Поле с именем обязательно",
                maxLength: {
                  value: 16,
                  message: "Введите корректное имя",
                },
              })}
            />
            <div className={style.error}>
              {errors?.cardName && String(errors?.cardName?.message)}
            </div>
          </div>

          <div className={style.item}>
            <div className={style.label}>Срок действия</div>
            <input
              className={style.input}
              type="text"
              placeholder="07/25"
              {...register("cardData", {
                required: "Поле со сроком действия обязательно",
                maxLength: {
                  value: 4,
                  message: "Номер карты не должен превышать 16 символов",
                },
              })}
            />
            <div className={style.error}>
              {errors?.cardData && String(errors?.cardData?.message)}
            </div>
          </div>
          <button className={style.btn} type="submit">
            <Button text="Подтвердить" />
            {isLoadingAddition && (
              <div className={style.loadingAddition}>
                <PaySuccessLoader />
              </div>
            )}
            {isSuccessAddition && (
              <div className={style.successAddition}>Оплачено ✔</div>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
