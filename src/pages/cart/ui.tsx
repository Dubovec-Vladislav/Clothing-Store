// General
import React, { FC, useEffect, useState } from "react";
import style from "./style.module.scss";
// Components
import { Header } from "widgets/header";
import { CartSection } from "widgets/cart-section";
import { CheckSection } from "widgets/check-section";
import { NewsSubscription } from "widgets/news-subscription";
import { Footer } from "widgets/footer";
import { PayPopup } from "shared/ui";

export const CartPage: FC = (props) => {
  useEffect(() => window.scrollTo(0, 0), []); // Scroll to top of page
  const [isPopupActive, toggleIsPopupActive] = useState<boolean>(false);

  return (
    <main className={style.block}>
      <Header />
      <div className={style.content}>
        <div className={style.title}>Ваша корзина</div>
        <CartSection />
        <CheckSection toggleIsPopupActive={toggleIsPopupActive} />
        <div
          className={
            isPopupActive
              ? `${style.payPopup} ${style.activePayPopup}`
              : `${style.payPopup}`
          }
        >
          <PayPopup toggleIsPopupActive={toggleIsPopupActive} />
        </div>
      </div>
      <NewsSubscription />
      <Footer />
    </main>
  );
};
