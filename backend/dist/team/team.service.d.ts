import { Team } from './interface/team.interface';
export declare class TeamService {
    private teams;
    id: number;
    getAll(): Team[];
    getId(id: number): Team;
    insert(body: any): void;
    update(id: number, body: any): void;
    delete(id: number): void;
    lastId(): number;
}
