import { MyPageService } from "./mypage.service";
import { UserEntity } from "../entity/user.entity";
export declare class MyPageController {
    private readonly MyPageService;
    constructor(MyPageService: MyPageService);
    findMyInfoById(user: any): Promise<UserEntity>;
}
