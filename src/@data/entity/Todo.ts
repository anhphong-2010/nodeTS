import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Todo")
export class Todo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string = "";

  @Column()
  public isComplete: boolean = false;

  @Column()
  public description: string = "";

  @Column()
  public time: Date;
}
