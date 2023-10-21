import { calcTotalAmount } from "./calcTotalAmount";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLocalStorage = () => {
  const data = localStorage.getItem("basket");
  const clothingItems = data ? JSON.parse(data) : [];

  const totalPrice = calcTotalPrice(clothingItems);
  const totalItems = calcTotalAmount(clothingItems);

  return {
    clothingItems,
    totalPrice,
    totalItems,
  };
};
