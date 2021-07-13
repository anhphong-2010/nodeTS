import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTimeField1601543690917 implements MigrationInterface {
    name = 'UpdateTimeField1601543690917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "time" datetime NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "time"`);
    }

}
