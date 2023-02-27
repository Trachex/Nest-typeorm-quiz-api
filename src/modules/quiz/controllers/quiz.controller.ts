import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
@ApiTags('Quiz')
export class QuizController {
    constructor(private quizService: QuizService ) {}

    @Get()
    @ApiOperation({
        summary: 'Get all quizes',
        description: 'API to retrieve all quizes'
    })
    @ApiResponse({ status: 200, type: [Quiz] })
    async getAllQuizes() {
        return await this.quizService.getAllQuizes();
    }

    @Get('/:id')
    @ApiOperation({
        summary: 'Get quiz by id',
        description: 'API to retrieve specific quiz by id'
    })
    @ApiResponse({ status: 200, type: Quiz })
    async getQuizById(@Param('id', ParseIntPipe) id: number) {
        return await this.quizService.getQuizById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({
        summary: 'Create quiz',
        description: 'API to create a new quiz'
    })
    @ApiCreatedResponse({
        description: 'Returns succsessfuly created quiz object',
        type: Quiz
    })
    async createQuiz(@Body() quiz: CreateQuizDto) {
        return await this.quizService.createQuiz(quiz);
    }
}
