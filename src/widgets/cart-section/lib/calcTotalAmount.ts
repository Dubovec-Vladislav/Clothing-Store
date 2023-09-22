import { ClothingItem } from "../model";

export const calcTotalAmount = (pizzas: ClothingItem[]) => {
  return pizzas.reduce((sum, pizza) => sum + pizza.numOfClothing, 0);
};