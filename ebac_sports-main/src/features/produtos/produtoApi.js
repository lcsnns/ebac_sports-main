// features/produtos/produtoApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Cria um serviço API para gerenciar requisições de produtos
export const produtoApi = createApi({
  reducerPath: 'produtoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/' }),
  endpoints: (builder) => ({
    getProdutos: builder.query({
      query: () => 'ebac_sports',
    }),
  }),
});

// Exporta o hook gerado automaticamente para uso em componentes
export const { useGetProdutosQuery } = produtoApi;