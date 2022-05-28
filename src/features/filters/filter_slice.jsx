import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredShops: [],
  name: "",
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
        name: "",
        area: "area",
        category: "category",
        status: "status",
      });
    },

    updateFilters: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    applyFilter: (state, action) => {
      let newValues = [...action.payload];

      if (state.name !== "") {
        newValues = newValues.filter((item) => {
          if (item.name.startsWith(state.name)) {
            return item;
          }
          return null;
        });
      }

      if (state.area !== "area") {
        newValues = newValues.filter((item) => item.area === state.area);
      }

      if (state.category !== "category") {
        newValues = newValues.filter(
          (item) => item.category === state.category
        );
      }

      if (state.status !== "status") {
        newValues = newValues.filter((item) => item.status === state.status);
      }

      state.filteredShops = newValues;
    },

    getItems: (state, action) => {
      state.filteredShops = [...action.payload];
    },
  },
});

export default filterSlice.reducer;

export const { resetToDefault, updateFilters, applyFilter, getItems } =
  filterSlice.actions;
