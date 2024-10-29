import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.UserRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.UserRepository.findOneBy({ id });
  }

  async create(User: User): Promise<User> {
    return this.UserRepository.save(User);
  }

  async update(id: number, User: Partial<User>): Promise<void> {
    await this.UserRepository.update(id, User);
  }

  async remove(id: number): Promise<void> {
    await this.UserRepository.delete(id);
  }
}
