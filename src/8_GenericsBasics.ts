/* Generics Basics */

// Why and What is Generics?
// Generics allow you to write reusable code that works with multiple types:
// Without generics (less flexible)
function getFirstNumber(arr: number[]): number {
  return arr[0]
}

// With generics (works with any type)
function getFirst<T>(arr: T[]): T {
  return arr[0]
}

// Usage
const firstNumber = getFirst([1, 2, 3]) // Type: number
const firstString = getFirst(['a', 'b', 'c']) // Type: string
// Generic Interfaces
interface Box<T> {
  value: T
}

let numberBox: Box<number> = { value: 42 }
let stringBox: Box<string> = { value: 'hello' }
// Generic Constraints
interface HasLength {
  length: number
}

// T must have a length property
function logLength<T extends HasLength>(item: T): T {
  console.log(item.length)
  return item
}

logLength('hello') // OK
logLength([1, 2, 3]) // OK
// logLength(123);
// Error: number doesn't have length

export {}
