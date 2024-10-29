import { UserService } from './user.service';
import { User } from './user.entity';
import { Team } from 'src/team/team.entity';
import { Repository } from 'typeorm';
export declare class UserController {
    private readonly userService;
    private teamRepository;
    constructor(userService: UserService, teamRepository: Repository<Team>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, user: Partial<User>): Promise<void>;
    remove(id: number): Promise<void>;
}
