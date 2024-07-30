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
exports.UsersService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entity/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let UsersService = class UsersService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async findOneByEmail(email) {
        return await this.userRepository.findOneBy({ email });
    }
    async createUser(createUserDto) {
        try {
            const user = this.userRepository.create({
                fullName: createUserDto.fullName,
                email: createUserDto.email,
                password: createUserDto.password,
                description: createUserDto.description,
            });
            console.log("createUserDto.password");
            console.log(createUserDto.password);
            console.log("user.password");
            console.log(user.password);
            return await this.userRepository.save(user);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOneById(id) {
        const userData = await this.userRepository.findOneBy({ id });
        if (!userData) {
            throw new common_1.HttpException("User Not Found", 404);
        }
        return userData;
    }
    async findOneByName(fullName) {
        const userData = await this.userRepository.findOneBy({ fullName });
        if (!userData) {
            throw new common_1.HttpException("User Not Found", 404);
        }
        return userData;
    }
    async update(id, updateUserDto) {
        const existingUser = await this.findOneById(id);
        if (!existingUser) {
            throw new common_1.HttpException("User Not Found", 404);
        }
        const updatedUser = this.userRepository.merge(existingUser, updateUserDto);
        return await this.userRepository.save(updatedUser);
    }
    async delete(id) {
        const existingUser = await this.findOneById(id);
        if (!existingUser) {
            throw new common_1.HttpException("User Not Found", 404);
        }
        await this.userRepository.remove(existingUser);
    }
    async findMyInfo(id) {
        return await this.findOneById(id);
    }
    async resequenceIds() {
        const users = await this.userRepository.find();
        await this.userRepository.clear();
        for (let i = 0; i < users.length; i++) {
            await this.userRepository.save({
                ...users[i],
                id: i + 1,
            });
        }
    }
    async paginate(options) {
        const queryBuilder = this.userRepository.createQueryBuilder("users");
        queryBuilder.orderBy("user_id.id", "ASC");
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map