exports.seed = function (knex) {
  return knex("ingredients").insert([
    { name: "egg" },
    { name: "all purpose flour" },
    { name: "salt" },
    { name: "white sugar" },
    { name: "milk" },
    { name: "butter" },
    { name: "baking powder" },
    { name: "vanilla extract" },
  ]);
};
