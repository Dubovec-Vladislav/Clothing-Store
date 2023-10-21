import { ClothingItem } from "../model";

export const calcTotalAmount = (clothingItems: ClothingItem[]) => {
  return clothingItems.reduce((sum, pizza) => sum + pizza.numOfClothing, 0);
};
