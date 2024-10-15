import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('noticia')
export class NoticiaController {

    @Get(':id')
    get(@Param('id') id: number) {
        return `Estamos en productos!!!${id}`;
    }

    @Post()
    post(): string {
        return "Estamos en productos!!!";
    }

    @Put()
    put(): string {
        return "Estamos en productos!!!";
    }

    @Delete()
    delete(): string {
        return "Estamos en productos!!!";
    }
}
