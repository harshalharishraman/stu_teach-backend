/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('teach_tb2',(t)=>{
    t.increments('tid').notNullable().primary();
    t.string('name').notNullable();
    t.string('email').notNullable();
    t.timestamps(true,true)
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('teach_tb2');
};
