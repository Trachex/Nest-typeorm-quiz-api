import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuizDto } from "./dto/create-quiz.dto";
import { Quiz } from "./quiz.entity";

@Injectable()
export class QuizService {
    constructor(
        @InjectRepository(Quiz) private quizRepo: Repository<Quiz>
    ) {}

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepo.findOne({ where: { id }, relations: { questions: true } });
    }

    async createQuiz(quizData: CreateQuizDto): Promise<Quiz> {
        return await this.quizRepo.save(quizData);
    }
}