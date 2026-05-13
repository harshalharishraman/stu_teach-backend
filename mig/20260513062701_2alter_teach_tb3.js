/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up=async function(knex){

    await knex.schema.alterTable(
        'teach_tb3',
        (table)=>{

            table.string('access_token');
            table.string('refresh_token');

        }
    );
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down=async function(knex){

    await knex.schema.alterTable(
        'teach_tb3',
        (table)=>{

            table.dropColumn('access_token');
            table.dropColumn('refresh_token');

        }
    );
};