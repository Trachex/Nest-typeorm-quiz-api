import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";

@Controller('question')
export class QuestionController {
    constructor(
        private questionService: QuestionService,
        private quizService: QuizService
    ) {}

    @Get('/:id')
    async getQuestionById(@Param('id', ParseIntPipe) id: number) {
        return await this.questionService.getQuestionById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createQuestion(@Body() question: CreateQuestionDto) {
        const quiz = await this.quizService.getQuizById(question.quizId);
        return await this.questionService.createQuestion(question, quiz);
    }
}