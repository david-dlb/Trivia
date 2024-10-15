import { UserService } from './user.service';
import { User } from './interface/user.interface';
import { TeamService } from 'src/team/team.service';
export declare class UserController {
    private readonly userService;
    private readonly teamService;
    constructor(userService: UserService, teamService: TeamService);
    getAll(): User[];
    find(id: number): User;
    create(response: any, name: string): void;
    delete(id: number): void;
}
