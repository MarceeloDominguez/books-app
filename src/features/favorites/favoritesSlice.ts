import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../interfaces/book";

interface InitialState {
  favorites: Book[];
}

const initialState: InitialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.ISBN !== action.payload
      );
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
