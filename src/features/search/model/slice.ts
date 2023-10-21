import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/model";
// Lib
import { getSearchStrFromLocalStorage } from "../lib/getSearchStrFromLocalStorage";

interface SearchState {
  searchStr: string;
}

const { searchStr } = getSearchStrFromLocalStorage();
const initialState: SearchState = { searchStr };

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchStr = action.payload;
    },
  },
});

export const { setSearchString } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearchString = (state: RootState) => state.search.searchStr;

export default searchSlice.reducer;
