export interface IOperationReducer<T> {
  run: T;
  fulfilled: string;
  pending: string;
  rejected: string;
}
