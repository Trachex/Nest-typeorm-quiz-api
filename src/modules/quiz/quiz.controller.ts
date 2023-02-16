import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService ) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() data: CreateQuizDto): Promise<Quiz> {
        return await this.quizService.createQuiz(data);
    }
}
