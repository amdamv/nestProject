"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        console.log(`Validating user: ${email}`);
        const user = await this.usersService.findOneByEmail(email);
        const isMatch = await bcrypt.compare(pass, user.password);
        console.log("isMatch");
        console.log(isMatch);
        if (user && isMatch) {
            const { password, ...result } = user;
            console.log(`User validated: ${email}`);
            return result;
        }
        console.log(`User validation failed: ${email}`);
        return null;
    }
    async signIn(email, password) {
        const user = await this.usersService.findOneByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { email: user.email, sub: user.id };
            console.log("User signed in");
            const token = this.jwtService.sign(payload);
            const userInfo = await this.usersService.findOneById(user.id);
            return {
                access_token: token,
                user: userInfo,
            };
        }
        console.log(`User validation failed: ${email}`);
        return null;
    }
    async register(createUserDto) {
        const newUser = await this.usersService.createUser({
            ...createUserDto,
        });
        const { password, ...result } = newUser;
        return result;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map