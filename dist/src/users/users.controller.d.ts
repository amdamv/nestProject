import { UserEntity } from "src/users/entity/user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PaginationQueryDto } from "src/users/dto/paginationQuery.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    resequenceIds(): Promise<{
        success: boolean;
        message: string;
    }>;
    createUser(createUserDto: CreateUserDto): Promise<{
        success: boolean;
        message: any;
    }>;
    findMyInfo(user: any): Promise<UserEntity>;
    findAll(): Promise<{
        success: boolean;
        data: UserEntity[];
        message: string;
    } | {
        success: boolean;
        message: any;
        data?: undefined;
    }>;
    findOneById(id: number): Promise<{
        success: boolean;
        data: UserEntity;
        message: string;
    } | {
        success: boolean;
        message: any;
        data?: undefined;
    }>;
    getAllUsers(query: PaginationQueryDto): Promise<import("nestjs-typeorm-paginate").Pagination<UserEntity, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        success: boolean;
        message: any;
    }>;
    delete(id: number): Promise<{
        success: boolean;
        message: any;
    }>;
}
