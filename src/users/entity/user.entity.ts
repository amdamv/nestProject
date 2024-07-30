import { IsNumber, length, MinLength } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import * as bcrypt from "bcrypt";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn({ name: "user_id" })
  @IsNumber()
  id: number;

  @Column()
  fullName: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
