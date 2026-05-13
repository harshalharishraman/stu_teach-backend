/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex){

    await knex.schema.alterTable('teach_tb3', (table)=>{

        table.text('access_token').alter();
        table.text('refresh_token').alter();

    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex){

    await knex.schema.alterTable('teach_tb3', (table)=>{

        table.string('access_token').alter();
        table.string('refresh_token').alter();

    });

};