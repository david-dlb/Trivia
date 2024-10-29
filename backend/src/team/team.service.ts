import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find({
      relations: ["users"]
    });
  }

  async findOne(id: number): Promise<Team> {
    const team = await this.teamRepository.findOne({
      where: { id },
      relations: ['users']
    });

    if (!team) {
      throw new NotFoundException(`Equipo con ID ${id} no encontrado`);
    }

    return team;
  }

  async create(Team: Team): Promise<Team> {
    return this.teamRepository.save(Team);
  }

  async update(id: number, Team: Partial<Team>): Promise<void> {
    await this.teamRepository.update(id, Team);
  }

  async remove(id: number): Promise<void> {
    await this.teamRepository.delete(id);
  }
}
