import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";

@Controller('question')
@ApiTags('Question')
export class QuestionController {
    constructor(
        private questionService: QuestionService,
        private quizService: QuizService
    ) {}

    @Get('/:id')
    @ApiOperation({
        summary: 'Get question by id',
        description: 'API to retrieve specific question by id'
    })
    @ApiResponse({ status: 200, type: Question })
    async getQuestionById(@Param('id', ParseIntPipe) id: number) {
        return await this.questionService.getQuestionById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({
        summary: 'Create question',
        description: 'API to create a new question'
    })
    @ApiCreatedResponse({
        description: 'Returns succsessfuly created question object',
        type: Question
    })
    async createQuestion(@Body() question: CreateQuestionDto) {
        const quiz = await this.quizService.getQuizById(question.quizId);
        return await this.questionService.createQuestion(question, quiz);
    }
}