import { TeamService } from './team.service';
import { Team } from './interface/team.interface';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    getAll(): Team[];
    find(id: number): Team;
    create(response: any, name: string): void;
    delete(id: number): void;
}
