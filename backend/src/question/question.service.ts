import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity'; 

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}
  async findAll(): Promise<Question[]> {
    return this.questionRepository.find();
  }

  async findOne(id: number): Promise<Question> {
    return this.questionRepository.findOneBy({ id });
  }

  async bulkCreate(questions: Question[]) {
    return this.questionRepository.save(questions);
  }

  async create(Question: Question): Promise<Question> {
    return this.questionRepository.save(Question);
  }

  async update(id: number, Question: Partial<Question>): Promise<void> {
    await this.questionRepository.update(id, Question);
  }

  async remove(id: number): Promise<void> {
    await this.questionRepository.delete(id);
  }
}
