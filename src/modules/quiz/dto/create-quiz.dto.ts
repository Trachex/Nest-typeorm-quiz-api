import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
    @ApiProperty({
        description: 'Quiz title',
        example: 'Title'
    })
    @IsNotEmpty({ message: 'Missing title param' })
    @Length(1, 255)
    title: string;

    @ApiProperty({
        description: 'Quiz description',
        minLength: 5,
        example: 'Description'
    })
    @IsNotEmpty()
    @Length(5)
    description: string;
}