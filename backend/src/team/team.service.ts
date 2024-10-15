import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Team } from './interface/team.interface';

@Injectable()
export class TeamService {
    private teams : Team [] = [
        
    ];
    public id = 0

    getAll() : Team[] {
        return this.teams;
    }

    getId(id: number): Team {
        const teamService = this.teams.find( (item: Team) => item.id == id);
        if(teamService) {
            return teamService;
        } else {
            throw new NotFoundException(`No encontramos el team ${id}`);
        }
    }

    insert(body: any) {
        this.teams.push({id: this.id, ...body})
        this.id++
    }

    update(id: number, body: any) {
         
    }
    
    delete(id: number) {
        const teamService = this.teams.find((item: Team) => item.id == id);
        if(teamService) {
            this.teams = this.teams.filter( (item: Team) => item.id != id );
        } else {
            throw new HttpException(`No existe el team ${id}`, HttpStatus.NOT_FOUND);
        }
    }

    lastId() : number {
        
    }
}
