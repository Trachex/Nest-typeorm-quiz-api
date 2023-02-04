import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService ) {}

    @Get()
    getAll() {
        return this.quizService.getAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() data: CreateQuizDto) {
        return data;
    }
}
