import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
    @IsNotEmpty({ message: 'Missing title param' })
    @Length(1, 255)
    title: string;

    @IsNotEmpty()
    @Length(5)
    description: string;
}