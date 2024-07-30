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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_decorator_1 = require("./userInfo/user.decorator");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const paginationQuery_dto_1 = require("./dto/paginationQuery.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async resequenceIds() {
        await this.usersService.resequenceIds();
        return {
            success: true,
            message: "User IDs resequenced successfully",
        };
    }
    async createUser(createUserDto) {
        try {
            await this.usersService.createUser(createUserDto);
            return {
                success: true,
                message: "User created successfully",
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }
    async findMyInfo(user) {
        console.log(user);
        console.log(user);
        console.log(user);
        console.log(user);
        return await this.usersService.findMyInfo(Number(user.id));
    }
    async findAll() {
        try {
            const data = await this.usersService.findAll();
            return {
                success: true,
                data,
                message: "Users Fetched Successfuly",
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }
    async findOneById(id) {
        try {
            const data = await this.usersService.findOneById(Number(id));
            return {
                success: true,
                data,
                message: "User Fetched Successfuly",
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }
    async getAllUsers(query) {
        const options = { page: query.page, limit: query.limit };
        return this.usersService.paginate(options);
    }
    async update(id, updateUserDto) {
        try {
            await this.usersService.update(Number(id), updateUserDto);
            return {
                success: true,
                message: "User Updated Successfuly",
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }
    async delete(id) {
        try {
            await this.usersService.delete(Number(id));
            return {
                success: true,
                message: "User Deleted Successfuly",
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)("resequence"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "resequenceIds", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)("my"),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findMyInfo", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationQuery_dto_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map