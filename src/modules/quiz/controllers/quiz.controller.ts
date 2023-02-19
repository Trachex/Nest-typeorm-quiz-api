import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService ) {}

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number) {
        return await this.quizService.getQuizById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() data: CreateQuizDto) {
        return await this.quizService.createQuiz(data);
    }
}
