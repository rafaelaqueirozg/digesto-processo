import { StandardizedDigestoType } from './standardized-digesto.type';

/**
 * - [0] data (texto, com a data no formato YYYY-MM-DD)
 *    - a data da movimentação indicada pelo tribunal.
 * - [1] tipo (texto, até 255 caracteres)
 *    - o tipo da movimentação é exatamente o informado pelo tribunal como Titulo da movimentacao.
 *    Nem todos disponibilizam um titulo. As vezes é só uma abreviação. Há bastante variação entre os Tribunais.
 * - [2] texto (texto, tamanho variável).
 * - [3] nome do juiz (texto, até 255 caracteres).
 * - [4] ID interno da movimentação (numero).
 * - [5] tipo inteligente (array de tuplas), é - quando disponível -
 *    - a classificação automática pelo Digesto da movimentação. Cada tupla dessa lista
 *    representa um assunto mencionado na movimentação. Quando não disponível, o valor é uma lista vazia.
 *    Veja Tipos padronizados Digesto para andamentos e publicações processuais com os valores que cada
 *    tupla pode assumir.
 */
export type Movs = [
  string,
  string,
  string,
  string,
  number,
  StandardizedDigestoType
];
