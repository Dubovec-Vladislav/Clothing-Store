import { ClothingItem } from "../model"

export const calcTotalPrice = (clothingItems: ClothingItem[]) => {
  return clothingItems.reduce((sum, pizza) => sum + pizza.price * pizza.numOfClothing, 0)
}