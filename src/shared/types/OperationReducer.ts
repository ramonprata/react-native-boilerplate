export interface OperationReducer<T> {
  operation: T;
  fulfilled: string;
  pending: string;
  rejected: string;
}
