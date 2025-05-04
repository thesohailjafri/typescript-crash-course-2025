/* Functions */

// Function Types

// Parameter and return types
function add(a: number, b: number): number {
  return a + b
}

// Arrow function
const multiply = (a: number, b: number): number => a * b

// Optional parameters
function greet(name: string, greeting?: string): string {
  return `${greeting || 'Hello'}, ${name}!`
}

// Default parameters
function power(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent)
}

// Function Types as Variables
let mathOperation: (a: number, b: number) => number
mathOperation = add
mathOperation = multiply

export {}
