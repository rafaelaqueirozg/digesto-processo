import { AttachmentType } from './attachment-type.type';

/**
 * - [0] processo Anexo ID,
 * - [1] endereço HTTP para download do anexo (texto).
 *    - Válidos e armazenados pelo Digesto por até 30 dias após envio.
 * - [2] tipo de anexo (numero): AttachmentType
 * - [3] data de publicacao (YYYY-MM-DDTHH:MM:ss),
 * - [4] conteudo em modo texto (texto)
 * - [5] data de obtenção (YYYY-MM-DDTHH:MM:ss),
 * - [6] ID movimentação: quando o tribunal associa o anexo a uma movimentação,
 *    indicamos o ID interno Digesto da mesma (5o. campo das tuplas em movs)
 * - [7] título do anexo, quando disponível (texto)
 */
export type Attachment = [
  number,
  string,
  AttachmentType,
  string,
  string,
  string,
  number,
  string
];
