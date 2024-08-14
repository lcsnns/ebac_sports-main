// features/produtos/produtoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Produto } from '../../App'; // Certifique-se de que o tipo Produto está definido corretamente

// Ação assíncrona para buscar produtos da API
export const fetchProdutos = createAsyncThunk(
  'produtos/fetchProdutos',
  async () => {
    const response = await fetch('https://fake-api-tau.vercel.app/api/ebac_sports');
    return await response.json();
  }
);

type ProdutoState = {
  items: Produto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null; // Adicionando um campo para armazenar mensagens de erro
};

const initialState: ProdutoState = {
  items: [],
  status: 'idle',
  error: null, // Inicializando o campo de erro como null
};

const produtoSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.status = 'loading'; // Atualiza o status para loading ao iniciar a requisição
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Atualiza o status para succeeded ao receber os dados
        state.items = action.payload; // Armazena os produtos recebidos
        state.error = null; // Reseta o erro em caso de sucesso
      })
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.status = 'failed'; // Atualiza o status para failed se a requisição falhar
        state.error = action.error.message; // Armazena a mensagem de erro
      });
  },
});

export default produtoSlice.reducer;