import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity('options')
export class Option extends BaseEntity {
    @ApiProperty({
        description: 'Option id',
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Option text',
        example: 'VSCode'
    })
    @Column({ type: 'varchar' })
    text: string

    @ApiProperty({
        description: 'Correct answer or not',
        example: true
    })
    @Column({ type: 'boolean' })
    isCorrect: boolean

    @ManyToOne(() => Question, (question) => question.options)
    question: Question;
}