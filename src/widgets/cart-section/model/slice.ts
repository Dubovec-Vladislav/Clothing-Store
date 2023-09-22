import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/model'
// Lib
import { getCartFromLocalStorage } from '../lib/getCartFromLocalStorage'

export interface ClothingItem {
  id: string,
  previewImg: string,
  name: string,
  price: number,
  color: string,
  size: number,
  numOfClothing: number,
}

interface CartState {
  clothingItems: ClothingItem[],
  totalPrice: number,
  totalItems: number,
};

const { clothingItems, totalPrice, totalItems } = getCartFromLocalStorage();

const initialState: CartState = {
  clothingItems,
  totalPrice,
  totalItems,
};

function findExistingClothingItemIndex(state: CartState, newItem: ClothingItem): number {
  const { id, color, size } = newItem;
  return state.clothingItems.findIndex(clothingItem =>
    clothingItem.id === id
    && clothingItem.color === color
    && clothingItem.size === size
  ); // Return index or -1
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    // Create
    addClothingItem: (state, action: PayloadAction<ClothingItem>) => {
      const existingClothingItemIndex = findExistingClothingItemIndex(state, action.payload);

      if (existingClothingItemIndex !== -1) state.clothingItems[existingClothingItemIndex].numOfClothing += action.payload.numOfClothing;
      else state.clothingItems = ([...state.clothingItems, action.payload]);

      state.totalItems += action.payload.numOfClothing;
      state.totalPrice += action.payload.numOfClothing * action.payload.price;
    },

    // // Update
    // changeNumberOfPizzas: (state, action: PayloadAction<{ id: string, price: number, action: string }>) => {
    //   const pizzaIndex = state.pizzas.findIndex(
    //     pizza => pizza.id === action.payload.id && pizza.price === action.payload.price
    //   );
    //   if (action.payload.action === '+') {
    //     state.pizzas[pizzaIndex].numberOfPizzas += 1;
    //     state.totalNumber += 1;
    //     state.totalPrice += action.payload.price;
    //   }
    //   else if (action.payload.action === '-') {
    //     state.pizzas[pizzaIndex].numberOfPizzas -= 1;
    //     state.totalNumber -= 1;
    //     state.totalPrice -= action.payload.price;
    //     if (state.pizzas[pizzaIndex].numberOfPizzas === 0) state.pizzas.splice(pizzaIndex, 1);
    //   };
    // },

    // // Delete
    // removePizza: (state, action: PayloadAction<{ id: string, price: number }>) => {
    //   const pizzaIndex = state.pizzas.findIndex(
    //     pizza => pizza.id === action.payload.id && pizza.price === action.payload.price
    //   );
    //   const numberOfPizzas = state.pizzas[pizzaIndex].numberOfPizzas;

    //   state.totalNumber -= numberOfPizzas;
    //   state.totalPrice -= numberOfPizzas * action.payload.price;
    //   state.pizzas.splice(pizzaIndex, 1);
    // },
    // clearPizzas: (state) => {
    //   state.pizzas = [];
    //   state.totalNumber = 0;
    //   state.totalPrice = 0;
    // },

  },
});

export const { addClothingItem } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartClothingItems = (state: RootState) => state.cart.clothingItems;
export const selectCartTotalItems = (state: RootState) => state.cart.totalItems;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;