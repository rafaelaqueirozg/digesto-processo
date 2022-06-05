/**
 * - [0] data e hora (YYYY-MM-DD HH:MM:SS)
 *   - Quando o horário não for informado pelo tribunal, será enviado 00:00.
 * - [1] local (texto)
 * - [2] tipo (texto)
 * - [3] situacao (texto)
 *   - Enviado apenas quando o parâmetro get_situacao_audiencia=true é passado na chamada
 */
export type Audicence = [string, string, string, string];
