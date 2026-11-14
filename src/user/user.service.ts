import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface.js';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Charan',
      email: '',
    },
    {
      id: 2,
      name: 'Raj',
      email: 'raj@bihari',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User {
    const user = this.users.find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return user;
  }
}
