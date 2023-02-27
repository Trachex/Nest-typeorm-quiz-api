import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class CreateOptionDto {
    @IsNotEmpty()
    @Length(2, 255)
    @ApiProperty({
        description: 'Option text',
        minLength: 2,
        maxLength: 255,
        example: 'VSCode'
    })
    text: string;

    @ApiProperty({
        description: 'Related question id',
        example: 1
    })
    @IsNotEmpty()
    questionId: number;

    @ApiProperty({
        description: 'Correct answer or not',
        example: true
    })
    @IsNotEmpty()
    isCorrect: boolean
}