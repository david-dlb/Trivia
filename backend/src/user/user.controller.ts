import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user.interface';
import { TeamService } from 'src/team/team.service';
import { randomInt } from 'crypto';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly teamService: TeamService) { }

    @Get()
    getAll() : User[] {
        return this.userService.getAll();
    }


    @Get(':id')
    find(@Param('id', ParseIntPipe) id: number): User {
        return this.userService.getId(id)
    }

    @Post()
    create(@Res() response,  @Body('name') name: string) {
        let random = Math.random()
        let id_team = random * this.teamService.id + 0
        console.log(this.teamService.id)
        this.userService.insert({
            name: name,
            id_team: id_team
        })
        response.status(HttpStatus.OK).send(this.userService.getAll())
    }

    delete(@Param('id') id: number) {
        this.userService.delete(id);
    }
}
