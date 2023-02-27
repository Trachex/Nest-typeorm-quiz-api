import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity('quizes')
export class Quiz extends BaseEntity {
    @ApiProperty({
        description: 'Quiz id',
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Quiz title',
        example: 'Title'
    })
    @Column({ type: 'varchar' })
    title: string;

    @ApiProperty({
        description: 'Quiz description',
        example: 'Description'
    })
    @Column({ type: 'text' })
    description: string;

    @OneToMany(() => Question, (question) => question.quiz)
    questions: Question[];
}