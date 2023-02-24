import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createUser(@Body() user: CreateUserDto) {
        return await this.userService.createUser(user);
    }
}