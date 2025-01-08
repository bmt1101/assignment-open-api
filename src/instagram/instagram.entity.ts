import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InstagramFollower {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column('text')
  following: string; // Store the following list as a JSON or text string
}
