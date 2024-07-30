import { UserEntity } from "../entity/user.entity";
import { UsersService } from "../users.service";
export declare class MyPageService {
    private readonly userService;
    constructor(userService: UsersService);
    findMyInfoById(id: number): Promise<UserEntity>;
}
