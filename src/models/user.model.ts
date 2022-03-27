export interface User {
  id?: number;
  name: string;
  email: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
