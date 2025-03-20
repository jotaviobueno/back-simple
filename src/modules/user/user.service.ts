import { Injectable } from '@nestjs/common';
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
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
