import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question) private questionRepo: Repository<Question>
    ) {}

    async getQuestionById(id: number): Promise<Question> {
        return await this.questionRepo.findOne({ where: { id }, relations: { options: true } });
    }

    async createQuestion(questionData: CreateQuestionDto, quiz: Quiz): Promise<Question> {
        const newQuestion = await this.questionRepo.save({
            question: questionData.question
        });

        quiz.questions = [...quiz.questions, newQuestion];
        await quiz.save();

        return newQuestion;
    }
}