import React from 'react';
import * as S from './styles';
import { Produto } from '../../features/produtos/produtoSlice'; // Certifique-se de que Produto está definido corretamente
import cesta from '../../assets/cesta.png';
import { paraReal } from '../Produto';

type Props = {
  itensNoCarrinho: Produto[];
  favoritos: Produto[];
};

const Header = ({ itensNoCarrinho, favoritos }: Props) => {
  const valorTotal = itensNoCarrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho de compras" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  );
};

export default Header;

