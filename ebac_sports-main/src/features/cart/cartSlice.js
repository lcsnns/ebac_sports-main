// features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { Produto } from '../../App';

interface CartState {
  items: Produto[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action) {
      state.items.push(action.payload);
    },
    removerDoCarrinho(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { adicionarAoCarrinho, removerDoCarrinho } = cartSlice.actions;
export default cartSlice.reducer;