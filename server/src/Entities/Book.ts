import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Books extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({ type: "varchar", length: 50 })
    title!: string;

    @Column({ type: "varchar", length: 50 })
    author!: string;

    @Column()
    publication_year!: number;

    @Column({ type: "varchar", length: 30 })
    genres!: string;

    @Column({ type: "float" })
    rating!: number;
}

@Entity()
export class BookHistory extends BaseEntity {

    @PrimaryGeneratedColumn()
    primaryId!: number;

    @Column()
    id!: number;
    
    @Column({ type: "varchar", length: 50 })
    title!: string;

    @Column({ type: "varchar", length: 50 })
    author!: string;

    @Column()
    publication_year!: number;

    @Column({ type: "varchar", length: 30 })
    genres!: string;

    @Column({ type: "float" })
    rating!: number;
}