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

    async createQuestion(questionData: CreateQuestionDto, quiz: Quiz): Promise<Question> {
        const newQuestion = await this.questionRepo.save({
            question: questionData.question
        });

        quiz.questions = [...quiz.questions, newQuestion];
        await quiz.save();

        return newQuestion;
    }
}