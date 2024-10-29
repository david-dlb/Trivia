import { Repository } from 'typeorm';
import { Team } from './team.entity';
export declare class TeamService {
    private teamRepository;
    constructor(teamRepository: Repository<Team>);
    findAll(): Promise<Team[]>;
    findOne(id: number): Promise<Team>;
    create(Team: Team): Promise<Team>;
    update(id: number, Team: Partial<Team>): Promise<void>;
    remove(id: number): Promise<void>;
}
