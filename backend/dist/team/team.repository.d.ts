import { Repository } from 'typeorm';
import { Team } from './team.entity';
export declare class TeamRepository {
    private teamRepository;
    constructor(teamRepository: Repository<Team>);
}
