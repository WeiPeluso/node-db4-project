const db = require("../data/db-config");
const { where } = require("../data/db-config");

module.exports = {
  find,
  getShoppingList,
  getInstructions,
};

function find() {
  return db("recipes");
}

function findById(id) {
  return db("recipes").where({ id }).first();
}

function getShoppingList(id) {
  return db("recipe_ingreident")
    .join("recipes", "recipe_ingreident.recipe_id", "recipes.id")
    .join("ingredients", "ingredients.id", "recipe_ingreident.ingredient_id")
    .select(
      "ingredients.name",
      "recipe_ingreident.quantity",
      "recipe_ingreident.unit"
    )
    .where({ "recipe_ingreident.recipe_id": id });
}

function getInstructions(id) {
  return db("steps")
    .join("recipes", "recipes.id", "steps.recipe_id")
    .select("steps.step")
    .where({ "steps.recipe_id": id });
}
