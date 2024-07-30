import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UserEntity } from "src/users/entity/user.entity";
import { SignInDto } from "src/users/dto/signIn.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<{
        id: number;
        fullName: string;
        email: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    signIn(signInDto: SignInDto): Promise<{
        message: string;
        accessToken?: undefined;
    } | {
        accessToken: {
            access_token: string;
            user: UserEntity;
        };
        message?: undefined;
    }>;
    getProfile(req: any): any;
}
