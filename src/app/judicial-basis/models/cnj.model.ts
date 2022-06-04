export interface Cnj {
  regional_cnj: boolean | null;
  numeroAlternativo: string;
  papel: string;
  natureza_id: number;
  vara: string;
  classeNatureza: string;
  papel_id: number;
  movs: Movs[];
  distribuicaoTipo: string;
  situacao: string | null;
  juiz: string | null;
  area: Area;
  assuntoExtra: string;
  liminar: boolean | null;
  audiencias: Audicence[];
  vara_original: string;
  extinto: Extinct;
  gratuita: boolean | null;
  valor: number | null;
  anexos: Attachment[];
  alteradoEm: string;
  fonte_sistema: string;
  foro: string;
  situacao_situacaoID: number | null;
  sentencaData: string | null;
  instancia: number;
  processosRelacionados: RelatedProcess[];
  numero: string;
  customs: any[];
  flag: Flag;
  comarca_cnj: string;
  comarca: string;
  tribunalID: number;
  classeNatureza_dg: number;
  foro_cnj: string;
  tribunal: string;
  area_id: number;
  processoID: number;
  distribuicaoData: string;
  segredo_justica: boolean;
  arquivado: boolean;
  classes: string[];
  acessos: string[];
  uf: string;
  criadoEm: string;
  partes: Parts[];
  polo: boolean;
}

export interface OperationStatus {
  status_op: string;
}

type Area =
  | 'Cível'
  | 'Criminal'
  | 'Indeterminado'
  | 'Trabalhista'
  | 'Fiscal'
  | 'Outros';

/**
 * 0 para não-extinto.
 * 1 ou mais para já extinto.
 *
 * Alguns tribunais mostram um checkbox “extinto”, e salvamos nesse campo o
 * valor que estiver no tribunal.
 * Pode ser o caso do tribunal não informar isso e o processo estar extinto,
 * nesse caso vamos informar por default 0.
 */
type Extinct = number;

/**
 * - [0] data e hora (YYYY-MM-DD HH:MM:SS)
 *   - Quando o horário não for informado pelo tribunal, será enviado 00:00.
 * - [1] local (texto)
 * - [2] tipo (texto)
 * - [3] situacao (texto)
 *   - Enviado apenas quando o parâmetro get_situacao_audiencia=true é passado na chamada
 */
type Audicence = [string, string, string, string];

/**
 * Valores maior que zero significa que o processo é digital.
 * Valor zero significa que é processo físico.
 * Valor 3 significa que é digital e os anexos foram baixados.
 */
type Flag = 0 | 1 | 2 | 3;

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
type Movs = [string, string, string, string, number, unknown];

interface RelatedProcess {
  id: number;
  distribuicao_data: string;
  codigo_identificador: string;
  instancia: number;
  natureza: string;
  numero: string;
  tribunal: string;
}

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
type Parts = [
  number,
  number,
  string,
  string,
  number,
  number,
  string,
  number,
  string,
  Lawyer,
  boolean,
  boolean,
  boolean,
  boolean,
  number,
  number,
  boolean
];

/**
 * - [0] advogado ID (numero),
 * - [1] nome (texto),
 * - [2] oab (texto),
 * - [3] CPF (texto),
 * - [4] UF (texto)
 */
type Lawyer = [number, string, string, string, string];

/**
 * - [0] processo Anexo ID,
 * - [1] endereço HTTP para download do anexo (texto).
 *    - Válidos e armazenados pelo Digesto por até 30 dias após envio.
 * - [2] tipo de anexo (numero): AttachmentType
 * - [3] data de publicacao (YYYY-MM-DDTHH:MM:ss),
 * - [4] conteudo em modo texto (texto)
 *    - Atenção: nos detalhes dos processos enviados numa distribuição (evt_type=4),
 *    este campo é omitido/pulado e nesta posição 4 é enviado a ``data de obtenção``
 *    e assim por diante, ou seja, a tupla de anexos fica com 7 elementos.
 * - [5] data de obtenção (YYYY-MM-DDTHH:MM:ss),
 * - [6] ID movimentação: quando o tribunal associa o anexo a uma movimentação,
 *    indicamos o ID interno Digesto da mesma (5o. campo das tuplas em movs)
 * - [7] título do anexo, quando disponível (texto)
 */

type Attachment =
  | [number, string, AttachmentType, string, string, string, number, string]
  | [number, string, AttachmentType, string, string, number, string];

/**
 * - 1 - Inicial
 * - 2 - Sentenca
 * - 3 - Outros
 * - 4 - Ajuizamento
 * - 5 - acordao
 * - 6 - despacho
 * - 7 - certidao
 * - 9 - documento
 * - 10 - procuracao
 * - 11 - ata
 * - 12 - laudo
 */
type AttachmentType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 10 | 11 | 12;
