function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: No type error

function addString(a: string, b: string): string {
  return a + b; // String concatenation
}

let stringResult = addString("1", "2"); // Correct for string addition.