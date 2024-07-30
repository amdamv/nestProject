export declare class UserEntity {
    id: number;
    fullName: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
