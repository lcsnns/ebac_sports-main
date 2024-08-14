// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import produtoReducer from '../features/produtos/produtoSlice';
import cartReducer from '../features/cart/cartSlice';
import favoritosReducer from '../features/favoritos/favoritosSlice';
import { produtoApi } from '../features/produtos/produtoApi'; // Importa a API

const store = configureStore({
  reducer: {
    produtos: produtoReducer,
    cart: cartReducer,
    favoritos: favoritosReducer,
    [produtoApi.reducerPath]: produtoApi.reducer, // Adiciona o reducer da API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtoApi.middleware), // Adiciona a middleware da API
});

// Tipagem para o RootState
export type RootState = ReturnType<typeof store.getState>;

export default store;
