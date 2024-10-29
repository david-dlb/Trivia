import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity';

@Controller('teams')
export class TeamController {
  constructor(private teamService: TeamService) {}

    @Get()
    async findAll() {
        return this.teamService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.teamService.findOne(parseInt(id));
    }

    @Post()
    async create(@Body() team: Team) {
        return this.teamService.create(team);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() team: Partial<Team>) {
        return this.teamService.update(parseInt(id), team);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.teamService.remove(parseInt(id));
    }
}
