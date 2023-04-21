import { Injectable } from '@nestjs/common';
import { User } from '../user/user';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      email: 'thallys@hotmail.com',
      password: '123456',
      permission: 'admin',
    },
    {
      id: 2,
      email: 'dayse@hotmail.com',
      password: '456789',
      permission: 'operator',
    },
    {
      id: 1,
      email: 'chico@hotmail.com',
      password: 'abm123',
      permission: 'operator',
    },
  ];

  getAll() {
    return this.users;
  }

  getById(id: number) {
    const user = this.users.find((x) => x.id == id);
    return user;
  }

  create(user: User) {
    //incrementando o id
    let lastId = 0;
    if (this.users.length > 0) {
      lastId = this.users[this.users.length - 1].id;
    }

    user.id = lastId + 1;
    this.users.push(user);

    return user;
  }

  delete(id: number) {
    const index = this.users.findIndex((x) => x.id == id);
    this.users.splice(index, 1);
  }
}
