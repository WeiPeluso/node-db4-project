exports.seed = function (knex) {
  return knex("recipe_ingreident").insert([
    { recipe_id: 1, ingredient_id: 4, quantity: 1, unit: "cup" },
    { recipe_id: 1, ingredient_id: 6, quantity: 0.5, unit: "cup" },
    { recipe_id: 1, ingredient_id: 1, quantity: 2, unit: "" },
    { recipe_id: 1, ingredient_id: 8, quantity: 2, unit: "teaspoon" },
    { recipe_id: 1, ingredient_id: 2, quantity: 1.5, unit: "cup" },
    { recipe_id: 1, ingredient_id: 7, quantity: 1.75, unit: "teaspoon" },
    { recipe_id: 1, ingredient_id: 5, quantity: 0.5, unit: "cup" },
  ]);
};
