// General
import React, { ChangeEvent, FC, useState } from "react";
import style from "./index.module.scss";
import { useDispatch } from "react-redux";
// Form libs
import { useForm } from "react-hook-form";
import InputMask from "comigo-tech-react-input-mask";
// Components
import { Button } from "shared/ui/button";
import { PaySuccessLoader } from "shared/loaders/pay-success-loader";
// Slice
import { clearClothingItems } from "widgets/cart-section";
// Img
import cross from "../img/cross.svg";

interface PayPopupProps {
  toggleIsPopupActive: (newValue: boolean) => void;
}

export const PayPopup: FC<PayPopupProps> = ({ toggleIsPopupActive }) => {
  const dispatch = useDispatch();
  const [isSuccessAddition, toggleSuccessAddition] = useState<boolean>(false);
  const [isLoadingAddition, toggleLoadingAddition] = useState<boolean>(false);

  const onSubmit = () => {
    toggleLoadingAddition(true);
    setTimeout(() => {
      toggleLoadingAddition(false);
      toggleSuccessAddition(true);
      dispatch(clearClothingItems());
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

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.title}>Оплата</div>
        <div className={style.cross} onClick={() => toggleIsPopupActive(false)}>
          <img src={cross} alt="cross" />
        </div>
        <form className={style.items} onSubmit={handleSubmit(onSubmit)}>
          {/* ---------------- Card Number ---------------- */}
          <div className={style.item}>
            <div className={style.label}>Номер карты</div>
            <InputMask
              className={style.input}
              placeholder="0123 4567 8901 2345"
              mask="9999 9999 9999 9999"
              maskPlaceholder=""
              {...register("cardNumber", {
                required: "Поле с номером обязательно",
                minLength: {
                  value: 19, // 16 number + 3 spaces
                  message: "Длина номера должна составлять 16 цифр",
                },
              })}
            ></InputMask>
            <div className={style.error}>
              {errors?.cardNumber && String(errors?.cardNumber?.message)}
            </div>
          </div>
          {/* -------------- End card number -------------- */}

          {/* ----------------- Card Name ----------------- */}
          <div className={style.item}>
            <div className={style.label}>Имя и фамилия держателя карты</div>
            <input
              className={style.input}
              placeholder="KONDRATIEV OLEG"
              {...register("cardName", {
                required: "Поле с именем обязательно",
                maxLength: {
                  value: 21,
                  message: "Введите имя корректной длины",
                },
                pattern: {
                  value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                  message: "Введите два слова, разделенных одним пробелом",
                },
              })}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const inputValue = e.target.value;

                // We remove all characters except Latin letters and spaces
                let latinWithSpaceValue = inputValue.replace(/[^a-zA-Z ]/g, "");

                // Check that the first character is not a space
                if (latinWithSpaceValue[0] === " ")
                  latinWithSpaceValue = latinWithSpaceValue.slice(1);

                // Checking if there is more than one space
                const spaceCount = (latinWithSpaceValue.match(/ /g) || [])
                  .length;

                // If there is more than one space, remove it
                if (spaceCount > 1)
                  latinWithSpaceValue = latinWithSpaceValue.slice(0, -1);

                // Write everything in capital letters
                e.target.value = latinWithSpaceValue.toUpperCase();
              }}
            />
            <div className={style.error}>
              {errors?.cardName && String(errors?.cardName?.message)}
            </div>
          </div>
          {/* --------------- End card name --------------- */}

          {/* ----------------- Card Data ----------------- */}
          <div className={style.item}>
            <div className={style.label}>Срок действия</div>
            <InputMask
              className={style.input}
              placeholder="07/27"
              mask="99/99"
              maskPlaceholder=""
              {...register("cardData", {
                required: "Поле со сроком действия обязательно",
                minLength: {
                  value: 5, // 4 number + 1 spaces
                  message: "Дата должна состоять из 4 цифр (месяц/год)",
                },
                validate: (value) => {
                  const [month, year] = value.split("/");
                  const currentYear = new Date().getFullYear();
                  const currentMonth = new Date().getMonth() + 1;

                  if (
                    year + 2000 < currentYear || // 27 + 2000 = 2027
                    month > 12 ||
                    (Number(year) + 2000 === currentYear &&
                      month < currentMonth)
                  )
                    return "Недействительная дата или истекший срок действия";
                },
              })}
            ></InputMask>
            <div className={style.error}>
              {errors?.cardData && String(errors?.cardData?.message)}
            </div>
          </div>
          {/* --------------- End card data --------------- */}

          {/* ----------------- Form btn ------------------ */}
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
          {/* --------------- End form btn ---------------- */}
        </form>
      </div>
    </section>
  );
};
