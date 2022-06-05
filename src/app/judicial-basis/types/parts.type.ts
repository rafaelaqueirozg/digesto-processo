import { Lawyer } from './lawyer.type';

/**
 * - [0] ID interno da participação dessa parte nesse processo (numero),
 * - [1] ID interno para essa parte (numero),
 * - [2] nome da parte (texto),
 * - [3] nome da parte normalizado: sem sufixos de empresas, pontuações etc (texto),
 * - [4] cnpj: quando disponibilizado por algum tribunal ou na inicial de processos digitais (numero),
 * - [5] cpf: quando disponibilizado por algum tribunal ou na inicial de processos digitais.
 *    - Só enviamos quando for possivel confirmar que ele é mencionado nos anexos
 *    e que o nome é próximo do que consta na Receita Federal (numero),
 * - [6] documento: CNPJ ou CPF formatado, dependendo da natureza da parte (texto),
 * - [7] parteRelacaoID: ID do tipo de relação/papel da parte no processo (numero),
 * - [8] relacaoNormalizado: nome da relação/papel que esta parte desempenha no processo (texto),
 * - [9] advogados: lista de tuplas, cada tupla representa um advogado desta parte. Lawyer[]
 * - [10] parte é autora (booleano),
 * - [11] parte é co-autora (booleano),
 * - [12] parte é ré (booleano),
 * - [13] parte é neutra (booleano),
 * - [14] CEP da parte (numero).
 * - [15] ID da entidade monitored_person correspondente a esta parte.
 *    - Útil quando este processo for enviado como uma nova distribuição de uma parte monitorada
 *    e você deseja saber qual parte monitorada de uma empresa deu match para esse processo.
 *    Caso esta parte do processo não seja match para nenhuma parte monitorada, o valor vem como null. (numero)
 * - [16] parte é pessoa física (boolean)
 */
export type Parts = [
  number,
  number,
  string,
  string,
  number,
  number,
  string,
  number,
  string,
  Lawyer[],
  boolean,
  boolean,
  boolean,
  boolean,
  number,
  number,
  boolean
];
