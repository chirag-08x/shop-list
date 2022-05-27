import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredShops: [],
  name: "name",
  area: "area",
  category: "category",
  status: "status",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    resetToDefault: (state, action) => {
      return (state = {
        filteredShops: action.payload,
        name: "name",
        area: "area",
        category: "category",
        status: "status",
      });
    },
  },
});

export default filterSlice.reducer;

export const { resetToDefault } = filterSlice.actions;
