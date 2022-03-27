export interface Pagination {
  showingfrom: number;
  showingUntil: number;
  perPage: number;
  totalResults: number;
  currentPage: number;
}

export interface Repository<T> {
  findAll(paginatin?: Pagination): Promise<Array<T>>;
  findById(id: number): Promise<Array<T>>;
  create(entity: T): Promise<T> | Promise<Array<T>>;
  update(entity: T, id: number): Promise<Array<T> | T | void>;
  delete(id: number): Promise<void | number>;
  findByEmail?: (email: string) => T;
  findActive?: () => Array<T> | T;
}
