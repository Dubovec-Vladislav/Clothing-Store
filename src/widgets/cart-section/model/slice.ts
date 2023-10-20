import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/model";
// Lib
import { getCartFromLocalStorage } from "../lib/getCartFromLocalStorage";
import { calcTotalAmount } from "../lib/calcTotalAmount";
import { calcTotalPrice } from "../lib/calcTotalPrice";

export interface ClothingItem {
  id: string;
  previewImg: string;
  name: string;
  price: number;
  color: string;
  size: number;
  numOfClothing: number;
}

interface CartState {
  clothingItems: ClothingItem[];
  totalPrice: number;
  totalItems: number;
}

const { clothingItems, totalPrice, totalItems } = getCartFromLocalStorage();

const initialState: CartState = {
  clothingItems,
  totalPrice,
  totalItems,
};

function findExistingClothingItemIndex(
  state: CartState,
  item: { id: string; color: string; size: number }
): number {
  const { id, color, size } = item;
  return state.clothingItems.findIndex(
    (clothingItem) =>
      clothingItem.id === id &&
      clothingItem.color === color &&
      clothingItem.size === size
  ); // Return index or -1
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Create
    addClothingItem: (state, action: PayloadAction<ClothingItem>) => {
      const item = {
        id: action.payload.id,
        color: action.payload.color,
        size: action.payload.size,
      };
      const existingClothingItemIndex = findExistingClothingItemIndex(
        state,
        item
      );

      if (existingClothingItemIndex !== -1)
        state.clothingItems[existingClothingItemIndex].numOfClothing +=
          action.payload.numOfClothing;
      else state.clothingItems = [...state.clothingItems, action.payload];

      state.totalItems = calcTotalAmount(state.clothingItems);
      state.totalPrice = calcTotalPrice(state.clothingItems);
    },

    // Update
    changeNumberOfClothingItems: (
      state,
      action: PayloadAction<{
        id: string;
        color: string;
        size: number;
        numOfClothing: number;
      }>
    ) => {
      const item = {
        id: action.payload.id,
        color: action.payload.color,
        size: action.payload.size,
      };
      const existingClothingItemIndex = findExistingClothingItemIndex(
        state,
        item
      );

      state.clothingItems[existingClothingItemIndex].numOfClothing =
        action.payload.numOfClothing;
      state.totalItems = calcTotalAmount(state.clothingItems);
      state.totalPrice = calcTotalPrice(state.clothingItems);
    },

    // Delete
    removeClothingItem: (
      state,
      action: PayloadAction<{ id: string; color: string; size: number }>
    ) => {
      const item = {
        id: action.payload.id,
        color: action.payload.color,
        size: action.payload.size,
      };
      const existingClothingItemIndex = findExistingClothingItemIndex(
        state,
        item
      );

      state.clothingItems.splice(existingClothingItemIndex, 1);

      state.totalItems = calcTotalAmount(state.clothingItems);
      state.totalPrice = calcTotalPrice(state.clothingItems);
    },

    clearClothingItems: (state) => {
      state.clothingItems = [];
      state.totalItems = calcTotalAmount(state.clothingItems);
      state.totalPrice = calcTotalPrice(state.clothingItems);
    },
  },
});

export const {
  addClothingItem,
  changeNumberOfClothingItems,
  removeClothingItem,
  clearClothingItems,
} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartClothingItems = (state: RootState) =>
  state.cart.clothingItems;
export const selectCartTotalItems = (state: RootState) => state.cart.totalItems;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;
