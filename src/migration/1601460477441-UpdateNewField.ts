import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateNewField1601460477441 implements MigrationInterface {
    name = 'UpdateNewField1601460477441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "description" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "description"`);
    }

}
