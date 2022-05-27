import { createSlice } from "@reduxjs/toolkit";

const getLocalStorage = () => {
  const storageValue = JSON.parse(localStorage.getItem("items"));
  if (storageValue) {
    return storageValue;
  }
  return [];
};

const initialState = {
  shopItems: [...getLocalStorage()],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addItemsToList: (state, action) => {
      state.shopItems.push({ ...action.payload });
      localStorage.setItem("items", JSON.stringify([...state.shopItems]));
    },
  },
});

export default shopSlice.reducer;

export const { addItemsToList } = shopSlice.actions;
