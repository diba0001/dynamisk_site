// Extras //

/* Object */
const hero = {
  name: "BatCat",
  info: "fat, but can fly",
  info2: "Eats nothing but lasagna",
};
person.name;
person.info;
person.image;

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category);
