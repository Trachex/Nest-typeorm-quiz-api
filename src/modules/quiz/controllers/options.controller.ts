import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateOptionDto } from "../dto/create-option.dto";
import { Option } from "../entities/option.entity";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";

@Controller('question/option')
@ApiTags('Question')
export class OptionController {
    constructor(
        private optionService: OptionService,
        private questionService: QuestionService
    ) {}

    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({
        summary: 'Create option',
        description: 'API to create an answer option for question'
    })
    @ApiCreatedResponse({
        description: 'Returns succsessfuly created option object',
        type: Option
    })
    async createOption(@Body() option: CreateOptionDto) {
        const question = await this.questionService.getQuestionById(option.questionId);
        return await this.optionService.createOption(option, question);
    }
}