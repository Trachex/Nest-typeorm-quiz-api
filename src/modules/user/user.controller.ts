import { Body, Controller, Get, Post, Request, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiCreatedResponse, ApiHeader, ApiHeaders, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({
        summary: 'Get user form JWT',
        description: 'Retrieve specific user using generated bearer token'
    })
    @ApiSecurity('bearer')
    @ApiHeader({
        name: 'Authorization',
        description: 'JWT Bearer token',
        required: true
    })
    @ApiResponse({ status: 200, type: User })
    async user(@Request() req) {
        return req.user;
    }

    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({
        summary: 'Create user',
        description: 'API to create a new user'
    })
    @ApiCreatedResponse({
        description: 'Returns succsessfuly created user object',
        type: User
    })
    async createUser(@Body() user: CreateUserDto) {
        return await this.userService.createUser(user);
    }
}