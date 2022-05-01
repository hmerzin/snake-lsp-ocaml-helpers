const { helpers } = require("./_build/default/testing.bc.js");

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
    const defNoDef = helpers.getDefinition(1, 18, 1, 19, prog2);
    expect(defBound).toStrictEqual([0, [0, 1, 4, 1, 5]]);
    expect(defDeclaration).toStrictEqual([0, [0, 1, 4, 1, 5]]);
    expect(defInvalid).toStrictEqual([1, "Couldn't find name"]);
    expect(defNoDef).toStrictEqual([0, [0, 0, -1, 0, -1]]);
  });
  it("Correctly gets a definition for name as a lambda argument", () => {
    const prog1 = `let x = (lambda (x): x) in x`;
    const prog2 = `let rec y = (lambda (x): y) in x`;
    const argBound = helpers.getDefinition(1, 21, 1, 22, prog1);
    const recBound = helpers.getDefinition(1, 25, 1, 26, prog2);
    expect(argBound).toStrictEqual([0, [0, 1, 17, 1, 18]]);
    expect(recBound).toStrictEqual([0, [0, 1, 8, 1, 9]]);
  });
  it("Correctly returns uses for a given position", () => {
    const prog = "let x = 5 in let x = add1(x) + x + x in x";
    const uses = helpers.viewAllUses(1, 4, 1, 5, prog);
    expect(uses).toStrictEqual([
      [0, 1, 26, 1, 27],
      [0, 1, 31, 1, 32],
      [0, 1, 35, 1, 36],
    ]);
  });
  it("Correctly shows all uses for decls", () => {
    const program = `def x(y, z): y + x
and def y(z): x()
and def z(x): x()
x()`;
    const uses = helpers.viewAllUses(1, 4, 1, 5, program);
    expect(uses).toStrictEqual([
      [0, 1, 17, 1, 18],
      [0, 2, 14, 2, 15],
      [0, 4, 0, 4, 1],
    ]);
  });
  it("Correclty returns a definition in a let-rec environment", () => {
    const program = `def x(y, z): y + x\nand def y(z): x()\nand def z(x): x()\nx()`;
    const definition = helpers.getDefinition(2, 14, 2, 15, program);
    expect(definition).toStrictEqual([0, [0, 1, 4, 1, 5]]);
  });
  it("Returns occurrences for unbound identifiers", () => {
    const program = `let e = c in c + (let c = 8 in c == e)`;
    const uses = helpers.viewAllUses(1, 8, 1, 9, program);
    const uses1 = helpers.viewAllUses(1, 4, 1, 5, program);
    expect(uses).toStrictEqual([
      [0, 1, 8, 1, 9],
      [0, 1, 13, 1, 14],
    ]);
    expect(uses1).toStrictEqual([[0, 1, 36, 1, 37]]);
  });
});
