import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IntitialStateTypes {
  isOpen: boolean;
}

const initialState: IntitialStateTypes = {
  isOpen: true,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    toggleCategory: (state) => {
      state.isOpen = !state.isOpen;
    },
    openCategory: (state) => {
      state.isOpen = true;
    },
    closeCategory: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleCategory, openCategory, closeCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
