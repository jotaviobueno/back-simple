import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private userDb = [
    {
      id: 1,
      name: 'Otavio Bueno',
      email: 'otavio.bueno@gmail.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'Otávio Bueno',
      email: 'otavio.bueno@gmail.com',
      password: '123456',
    },
    {
      id: 3,
      name: 'Otávio Bueno',
      email: 'otavio.bueno@gmail.com',
      password: '123456',
    },
    {
      id: 4,
      name: 'João Bueno',
      email: 'joao.bueno@gmail.com',
      password: '123456',
    },
    {
      id: 5,
      name: 'João Bueno',
      email: 'joao.bueno@gmail.com',
      password: '123456',
    },
  ];

  async create(createUserDto: CreateUserDto) {}

  findAll() {
    return this.userDb;
  }

  findOne(id: number) {
    const user = this.userDb.find((user) => user.id === id);

    if (!user) throw new HttpException('User not found', 404);

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const user = this.userDb.findIndex((user) => user.id === id);

    if (user === -1) throw new HttpException('User not found', 404);

    const remove = this.userDb.splice(user, 1);

    return remove;
  }
}
