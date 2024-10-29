import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private UserRepository;
    constructor(UserRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(User: User): Promise<User>;
    update(id: number, User: Partial<User>): Promise<void>;
    remove(id: number): Promise<void>;
}
