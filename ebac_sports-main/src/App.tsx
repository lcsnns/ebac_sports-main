import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Produtos from './containers/Produtos';
import { GlobalStyle } from './styles';
import { RootState } from './store/store';
import { adicionarFavorito, removerFavorito } from './features/favoritos/favoritosSlice';
import { adicionarAoCarrinho } from './features/cart/cartSlice';
import { useGetProdutosQuery } from './features/produtos/produtoApi'; 
import { Produto } from './types'; // Certifique-se de que a interface Produto está definida aqui

function App() {
  const dispatch = useDispatch();
  const { data: produtos = [], error, isLoading } = useGetProdutosQuery();
  const carrinho = useSelector((state: RootState) => state.cart.items);
  const favoritos = useSelector((state: RootState) => state.favoritos.items);

  const handleAdicionarAoCarrinho = (produto: Produto) => { // Definido o tipo Produto
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado');
    } else {
      dispatch(adicionarAoCarrinho(produto));
    }
  };

  const handleFavoritar = (produto: Produto) => { // Definido o tipo Produto
    if (favoritos.find((p) => p.id === produto.id)) {
      dispatch(removerFavorito(produto.id));
    } else {
      dispatch(adicionarFavorito(produto));
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        {isLoading && <p>Carregando produtos...</p>}
        {error && <p>Erro ao carregar produtos: {'data' in error ? error.data : 'Erro desconhecido'}</p>} {/* Corrigido o acesso ao erro */}
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={handleAdicionarAoCarrinho}
        />
      </div>
    </>
  );
}

export default App;