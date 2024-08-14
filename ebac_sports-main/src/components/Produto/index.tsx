import React from 'react';
import { Produto as ProdutoType } from '../../types'; // Certifique-se de que Produto está definido corretamente
import Produto from '../components/Produto';
import * as S from './styles';

type Props = {
  produtos: ProdutoType[];
  favoritos: ProdutoType[];
  favoritar: (produto: ProdutoType) => void;
  adicionarAoCarrinho: (produto: ProdutoType) => void;
};

const Produtos = ({ produtos, favoritos, favoritar, adicionarAoCarrinho }: Props) => {
  return (
    <S.Produtos>
      {produtos.map((produto) => {
        const estaNosFavoritos = favoritos.some((fav) => fav.id === produto.id);
        return (
          <Produto
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={adicionarAoCarrinho}
            estaNosFavoritos={estaNosFavoritos}
          />
        );
      })}
    </S.Produtos>
  );
};

export default Produtos;


