/* Union and Literal Types */
// Union Types
// Can be string OR number
let id: string | number
id = 'abc123'
id = 123

// Type narrowing
function processId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase()) // TypeScript knows it's a string
  } else {
    console.log(id.toFixed(2)) // TypeScript knows it's a number
  }
}

// Literal Types
// Specific string values
type Direction = 'north' | 'south' | 'east' | 'west'
let heading: Direction = 'north'

// Specific number values
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6
let roll: DiceRoll = 6

export {}
