import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Res } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './interface/team.interface';


@Controller('team')
export class TeamController {
    constructor(private readonly teamService: TeamService) { }

    @Get()
    getAll() : Team[] {
        return this.teamService.getAll();
    }


    @Get(':id')
    find(@Param('id', ParseIntPipe) id: number): Team {
        return this.teamService.getId(id)
    }

    @Post()
    create(@Res() response,  @Body('name') name: string) {

        this.teamService.insert({
            name: name
        })
        response.status(HttpStatus.OK).send(this.teamService.getAll())
    }

    delete(@Param('id') id: number) {
        this.teamService.delete(id);
    }
}
