const assert = require("assert");
const { helpers } = require("./_build/default/testing.bc.js");
const prog = "let x = 5 in let x = add1(x) + x + x in x";
const uses = helpers.viewAllUses(1, 4, 1, 5, prog);
// assert(
//   uses ==
//     [
//       [0, 1, 26, 1, 27],
//       [0, 1, 31, 1, 32],
//       [0, 1, 35, 1, 36],
//     ]
// );
// console.log(uses);

// const definition1 = helpers.getDefinition(1, 4, 1, 5, prog);
// const definition2 = helpers.getDefinition(1, 26, 1, 27, prog);
// const definition3 = helpers.getDefinition(1, 31, 1, 32, prog);
// const definition4 = helpers.getDefinition(1, 31, 1, 32, prog);
// const definition5 = helpers.getDefinition(1, 36, 1, 37, prog);
// console.log(definition1, definition2, definition3, definition4, definition5);

const prog2 = "let x = 10 in x + y";
const def4 = helpers.getDefinition(1, 14, 1, 15, prog2);
const def5 = helpers.getDefinition(1, 4, 1, 5, prog2);
console.log(def4, def5);
