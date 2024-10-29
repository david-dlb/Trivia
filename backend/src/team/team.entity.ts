import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Team {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  points: string; 
}
