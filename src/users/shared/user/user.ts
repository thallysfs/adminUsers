export class User {
  id: number;
  email: string;
  password: string;
  permission: 'admin' | 'operator';
}
