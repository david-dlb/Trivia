import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Res } from '@nestjs/common';
import { Question } from './question.entity';
import { QuestionService } from './question.service';


@Controller('Question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

    @Get()
    async findAll(): Promise<Question[]> {
        return this.questionService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Question> {
        return this.questionService.findOne(id);
    }

    @Post("file")
    @HttpCode(HttpStatus.CREATED)
    async createBulk(@Body() questions: Question[]) {
        try {
            const savedQuestions = await this.questionService.bulkCreate(questions);
            return { success: true, count: savedQuestions.length };
        } catch (error) {
            console.error('Error al guardar las preguntas:', error);
            throw new Error('Error al guardar las preguntas');
        }
    }

    @Post()
    async create(@Body() Question: Question): Promise<Question> {
        return this.questionService.create(Question);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() Question: Partial<Question>): Promise<void> {
        return this.questionService.update(id, Question);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.questionService.remove(id);
    }
}
