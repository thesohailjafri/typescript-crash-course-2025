/* Type Inference and Assertions */

// TypeScript can automatically infer types:
// TypeScript infers string
let message = 'Hello'

// TypeScript infers number[]
let numbers = [1, 2, 3]

// TypeScript infers the return type (number)
function square(n: number) {
  return n * n
}

// TypeScript infers the best common type
let mixed = [1, 'two', true] // (string | number | boolean)[]
// When to use explicit types:

export {}
