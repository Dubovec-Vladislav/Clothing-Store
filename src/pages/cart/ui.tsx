// General
import React, { FC, useEffect, useState, useRef } from "react";
import style from "./style.module.scss";
// Components
import { Header } from "widgets/header";
import { CartSection } from "widgets/cart-section";
import { CheckSection } from "widgets/check-section";
import { PayPopup } from "shared/ui";
import { NewsSubscription } from "widgets/news-subscription";
import { Footer } from "widgets/footer";

export const CartPage: FC = (props) => {
  useEffect(() => window.scrollTo(0, 0), []); // Scroll to top of page
  const [isPopupActive, toggleIsPopupActive] = useState<boolean>(false);
  const payPopupRef = useRef<HTMLDivElement>(null);

  return (
    <main className={style.block}>
      <Header />
      <div className={style.content}>
        <div className={style.title}>Ваша корзина</div>
        <CartSection />
        <CheckSection toggleIsPopupActive={toggleIsPopupActive} />
        <div
          ref={payPopupRef}
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
