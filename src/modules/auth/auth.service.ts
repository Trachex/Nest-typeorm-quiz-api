import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<User | undefined> {
        const user = await this.userService.getByEmail(email);
        if(!user) throw new BadRequestException();

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) throw new UnauthorizedException();

        return user;
    }

    generateToken(user: any): String {
        return  this.jwtService.sign({
            name: user.name,
            sub: user.id
        })
    }
}
