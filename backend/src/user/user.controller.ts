import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { TeamService } from 'src/team/team.service';
import { Team } from 'src/team/team.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('User')
export class UserController {
    constructor(private readonly userService: UserService, @InjectRepository(Team)
    private teamRepository: Repository<Team>) { }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(id);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        const teams = await this.teamRepository.find({
            relations: ["users"]
          });
        
        if (teams && teams.length > 0) {
            const randomTeamId = teams[Math.floor(Math.random() * teams.length)].id;
            
            // Creamos el usuario y lo asociamos con el equipo seleccionado
            const newUser = {
              ...user,
              teamId: randomTeamId,
            };
            return this.userService.create(newUser);
        }

    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: Partial<User>): Promise<void> {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.userService.remove(id);
    }
}
