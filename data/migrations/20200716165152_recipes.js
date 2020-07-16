exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.varchar("name", 50).unique().notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.varchar("name", 50).unique().notNullable();
    })
    .createTable("recipe_ingreident", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");

      tbl.float("quantity").notNullable();
      tbl.varchar("unit");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredient");
};
