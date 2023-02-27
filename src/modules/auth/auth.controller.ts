import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post()
    @UseGuards(LocalAuthGuard)
    @ApiOperation({
        summary: 'Log in',
        description: 'API to generate bearer token'
    })
    @ApiBody({ schema: { properties: {
        username: { type: 'string' },
        password: { type: 'string' }
    } } })
    @ApiCreatedResponse({
        description: 'Returns succsessfuly generated token',
        type: String
    })
    async login(@Request() req) {
        return this.authService.generateToken(req.user);
    }
}
