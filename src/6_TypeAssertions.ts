/* Type Assertions */

// Function parameters
// Object properties with complex types
// When inference might be unclear
// Public API boundaries

// Sometimes you know more about a type than TypeScript:
// Type assertion with 'as'
let someValue: unknown = 'this is a string'
let strLength: number = (someValue as string).length

// Alternative angle-bracket syntax (not in JSX)
let strLength2: number = (<string>someValue).length

// DOM elements
const input = document.getElementById('user-input') as HTMLInputElement
input.value = 'Hello'

// ⚠️ Use assertions sparingly - they bypass TypeScript's type checking!

export {}
