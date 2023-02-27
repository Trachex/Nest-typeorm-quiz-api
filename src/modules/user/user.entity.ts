import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { ApiProperty } from "@nestjs/swagger";

@Entity('users')
export class User extends BaseEntity {
    @ApiProperty({
        description: 'User id',
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty({
        description: 'User name',
        example: 'John Doe'
    })
    @Column()
    name: string;

    @ApiProperty({
        description: 'User email',
        example: 'example@mail.com'
    })
    @Column({ unique: true })
    email: string;

    @ApiProperty({
        description: 'User hashed password',
        type: String
    })
    @Column()
    password: string;

    @ApiProperty({
        description: 'User creation date',
        type: Date
    })
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({
        description: 'User last update date',
        type: Date
    })
    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
}