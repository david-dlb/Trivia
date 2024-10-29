import { Repository } from 'typeorm';
import { Question } from './question.entity';
export declare class QuestionService {
    private questionRepository;
    constructor(questionRepository: Repository<Question>);
    findAll(): Promise<Question[]>;
    findOne(id: number): Promise<Question>;
    bulkCreate(questions: Question[]): Promise<Question[]>;
    create(Question: Question): Promise<Question>;
    update(id: number, Question: Partial<Question>): Promise<void>;
    remove(id: number): Promise<void>;
}
