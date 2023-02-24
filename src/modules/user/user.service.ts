import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    async createUser(user: CreateUserDto): Promise<User> {
        const newUser = new User();
        newUser.email = user.email;
        newUser.password = user.password;
        newUser.name = user.name;

        return await newUser.save();
    }
}