exports.seed = function (knex) {
  return knex("recipes").insert([
    { name: "Simple White Cake" },
    { name: "Good Old Fashioned Panackes" },
  ]);
};
