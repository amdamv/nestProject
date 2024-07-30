import {
  Controller,
  Post,
  Body,
  UseGuards,
  HttpStatus,
  HttpCode,
  Get,
  Request,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { UserEntity } from "src/users/entity/user.entity";
import { SignInDto } from "src/users/dto/signIn.dto";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post("login")
  async signIn(@Body() signInDto: SignInDto) {
    const token = await this.authService.signIn(
      signInDto.email,
      signInDto.password
    );
    if (!token) {
      return { message: "Invalid credentials" };
    }
    return { accessToken: token };
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
