/**
 * - T - Adapter return type
 * - U (optional) - Adapter parameter type
 */
export interface Adapter<T, U = unknown> {
  adapt(item: U): T;
}
