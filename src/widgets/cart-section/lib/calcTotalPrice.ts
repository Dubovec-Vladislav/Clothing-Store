import { ClothingItem } from "../model"

export const calcTotalPrice = (pizzas: ClothingItem[]) => {
  return pizzas.reduce((sum, pizza) => sum + pizza.price * pizza.numOfClothing, 0)
}