import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto {
    @ApiProperty({
        description: 'Question text',
        minLength: 3,
        maxLength: 255,
        example: 'What is your favorite text editor?'
    })
    @IsNotEmpty()
    @Length(3, 255)
    question: string;

    @ApiProperty({
        description: 'Related quiz id',
        example: 1
    })
    @IsNotEmpty()
    quizId: number;
}