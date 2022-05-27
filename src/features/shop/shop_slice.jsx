import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopItems: [],
  filteredItems: [],
  name: "",
  area: "",
  category: "",
  opening: "",
  closing: "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
});

// console.log(shopSlice);

export default shopSlice.reducer;
