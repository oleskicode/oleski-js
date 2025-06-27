const edibles = [
  {
    name: "orange",
    type: "fruit",
  },
  {
    name: "potato",
    type: "vegetable",
  },
  {
    name: "apple",
    type: "fruit",
  },
  {
    name: "banana",
    type: "fruit",
  },
  {
    name: "cabbage",
    type: "vegetable",
  },
];

console.log("Map method example"); // Map
const capitalizedEdibles = edibles.map(function (item) {
  return (item =
    String(item.name[0]).toUpperCase() + String(item.name).slice(1));
});
console.log(capitalizedEdibles);

console.log("Filter method example"); // Filter
console.log(typeof edibles, edibles);
const fruits = edibles.filter(function (item) {
  return item.type === "fruit";
});
console.log(fruits);

console.log("Find method");
const findBanana = edibles.find(function (item) {
  return item.name === "banana";
});
console.log(findBanana);

// console.log("Reduce method") //Reduce
// console.log("Foreach method"); //Foreach
