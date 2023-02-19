import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { Question } from "./question.entity";

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question) private questionRepo: Repository<Question>
    ) {}

    async createQuestion(questionData: CreateQuestionDto): Promise<Question> {
        return await this.questionRepo.save(questionData);
    }
}