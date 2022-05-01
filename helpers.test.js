const { helpers } = require("./_build/default/testing.bc.js");
// const prog = "let x = 5 in let x = add1(x) + x + x in x";
// const uses = helpers.viewAllUses(1, 4, 1, 5, prog);
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

describe("get definitions", () => {
  it("Correctly gets a definition for name in a let-bound environment", () => {
    const prog2 = "let x = 10 in x + y";
    const defBound = helpers.getDefinition(1, 14, 1, 15, prog2);
    const defDeclaration = helpers.getDefinition(1, 4, 1, 5, prog2);
    const defInvalid = helpers.getDefinition(1, 14, 1, 12, prog2);
    expect(defBound).toStrictEqual([0, [0, 1, 4, 1, 5]]);
    expect(defDeclaration).toStrictEqual([0, [0, 1, 4, 1, 5]]);
    expect(defInvalid).toStrictEqual([1, "Couldn't find name"]);
  });
  it("Correctly gets a definition for name as a lambda argument", () => {
    const prog1 = `let x = (lambda (x): x) in x`;
    const prog2 = `let rec y = (lambda (x): y) in x`;
    const argBound = helpers.getDefinition(1, 21, 1, 22, prog1);
    const recBound = helpers.getDefinition(1, 25, 1, 26, prog2);
    // const defDeclaration = helpers.getDefinition(1, 4, 1, 5, prog2);
    // const defInvalid = helpers.getDefinition(1, 14, 1, 12, prog2);
    expect(argBound).toStrictEqual([0, [0, 1, 17, 1, 18]]);
    expect(recBound).toStrictEqual([0, [0, 1, 8, 1, 9]]);
    // expect(defDeclaration).toStrictEqual([0, [0, 1, 4, 1, 5]]);
    // expect(defInvalid).toStrictEqual([1, "Couldn't find name"]);
  });
});
