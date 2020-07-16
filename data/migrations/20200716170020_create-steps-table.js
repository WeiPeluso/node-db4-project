exports.up = function (knex) {
  return knex.schema.createTable("steps", (tbl) => {
    tbl.increments();
    tbl.integer("recipe_id").unsigned().notNullable().references("recipes.id");
    tbl.text("step");
  });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredient")
    .dropTableIfExists("steps");
};
