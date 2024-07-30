import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "src/users/entity/user.entity";
import { CreateUserDto } from "src/users/dto/create-user.dto";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    signIn(email: string, password: string): Promise<{
        access_token: string;
        user: UserEntity;
    }>;
    register(createUserDto: CreateUserDto): Promise<{
        id: number;
        fullName: string;
        email: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
