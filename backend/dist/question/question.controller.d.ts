import { Question } from './question.entity';
import { QuestionService } from './question.service';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    findAll(): Promise<Question[]>;
    findOne(id: number): Promise<Question>;
    createBulk(questions: Question[]): Promise<{
        success: boolean;
        count: number;
    }>;
    push(idQuestion: number, idUser: number): Promise<void>;
    create(Question: Question): Promise<Question>;
    update(id: number, Question: Partial<Question>): Promise<void>;
    remove(id: number): Promise<void>;
}
