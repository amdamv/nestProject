import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
} from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: "Password must be more than 6 characters" })
  password: string;

  @IsOptional()
  description: string;
}
