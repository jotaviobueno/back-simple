import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private userDb = [
    {
      id: 1,
      name: 'Rafael Silva',
      email: 'rafael.silva@gmail.com',
      password: 'abc123',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Carla Mendes',
      email: 'carla.mendes@outlook.com',
      password: 'senha456',
      role: 'admin',
    },
    {
      id: 3,
      name: 'Lucas Oliveira',
      email: 'lucas.oliveira@hotmail.com',
      password: 'qwerty789',
      role: 'user',
    },
    {
      id: 4,
      name: 'Marina Costa',
      email: 'marina.costa@gmail.com',
      password: 'pass1234',
      role: 'user',
    },
    {
      id: 5,
      name: 'Bruno Santos',
      email: 'bruno.santos@yahoo.com',
      password: 'senha2022',
      role: 'user',
    },
    {
      id: 6,
      name: 'Juliana Almeida',
      email: 'juliana.almeida@gmail.com',
      password: 'ju123456',
      role: 'user',
    },
    {
      id: 7,
      name: 'Fernando Pereira',
      email: 'fernando.pereira@outlook.com',
      password: 'fer789456',
      role: 'user',
    },
    {
      id: 8,
      name: 'Aline Rodrigues',
      email: 'aline.rodrigues@gmail.com',
      password: 'aline2023',
      role: 'user',
    },
    {
      id: 9,
      name: 'Ricardo Martins',
      email: 'ricardo.martins@hotmail.com',
      password: 'rm456789',
      role: 'user',
    },
    {
      id: 10,
      name: 'Patricia Lima',
      email: 'patricia.lima@gmail.com',
      password: 'patty654',
      role: 'user',
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
