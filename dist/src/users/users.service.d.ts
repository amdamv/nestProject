import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entity/user.entity";
import { Repository } from "typeorm";
import { IPaginationOptions, Pagination } from "nestjs-typeorm-paginate";
export declare class UsersService {
    private userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService);
    findOneByEmail(email: string): Promise<UserEntity>;
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findOneById(id: number): Promise<UserEntity>;
    findOneByName(fullName: string): Promise<UserEntity | undefined>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity>;
    delete(id: number): Promise<void>;
    findMyInfo(id: number): Promise<UserEntity>;
    resequenceIds(): Promise<void>;
    paginate(options: IPaginationOptions): Promise<Pagination<UserEntity>>;
}
