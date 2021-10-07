import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from '../entity/user.entity';
import { User as UserType } from './user.type';

@Injectable()
export class UserService {
  getUsers(): Promise<UserType[]> {
    return getRepository(User).find();
  }
}
