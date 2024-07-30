import { Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { UsersService } from "../../users/users.service";
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    private readonly configService;
    constructor(usersService: UsersService, configService: ConfigService);
    validate(payload: any): Promise<import("../../users/entity/user.entity").UserEntity>;
}
export {};
