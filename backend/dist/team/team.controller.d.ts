import { TeamService } from './team.service';
import { Team } from './team.entity';
export declare class TeamController {
    private teamService;
    constructor(teamService: TeamService);
    findAll(): Promise<Team[]>;
    findOne(id: string): Promise<Team>;
    create(team: Team): Promise<Team>;
    update(id: string, team: Partial<Team>): Promise<void>;
    remove(id: string): Promise<void>;
}
