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

    removeListItem: (state, action) => {
      const id = action.payload;
      const newItems = state.shopItems.filter((item) => item.id !== id);
      state.shopItems = [...newItems];
      localStorage.setItem("items", JSON.stringify([...state.shopItems]));
    },

    clearList: (state, action) => {
      state.shopItems = [];
      localStorage.removeItem("items");
    },
  },
});

export default shopSlice.reducer;

export const { addItemsToList, removeListItem, clearList } = shopSlice.actions;
