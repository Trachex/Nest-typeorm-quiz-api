import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(6, 24)
    password: string;

    @IsNotEmpty()
    name: string;
}