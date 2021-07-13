import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1601459441396 implements MigrationInterface {
    name = 'Initialize1601459441396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "isComplete" bit NOT NULL, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
