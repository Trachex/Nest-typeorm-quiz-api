import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Option } from "./option.entity";
import { Quiz } from "./quiz.entity";

@Entity('questions')
export class Question extends BaseEntity {
    @ApiProperty({
        description: 'Question id',
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Question text',
        example: 'What is your favorite text editor?'
    })
    @Column({ type: "varchar" })
    question: string;

    @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    quiz: Quiz;

    @OneToMany(() => Option, (option) => option.question)
    options: Option[];
}