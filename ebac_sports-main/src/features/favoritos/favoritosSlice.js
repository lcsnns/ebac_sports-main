// features/favoritos/favoritosSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../../App';

type FavoritosState = {
  items: Produto[];
};

const initialState: FavoritosState = {
  items: [],
};

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      state.items.push(action.payload);
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((produto) => produto.id !== action.payload);
    },
  },
});

export const { adicionarFavorito, removerFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;
