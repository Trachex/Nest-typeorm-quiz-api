import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: 'User email',
        example: 'example@mail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'User account password',
        minLength: 6,
        maxLength: 24,
        example: '123456'
    })
    @IsNotEmpty()
    @Length(6, 24)
    password: string;

    @ApiProperty({
        description: 'User name',
        example: 'John Doe'
    })
    @IsNotEmpty()
    name: string;
}