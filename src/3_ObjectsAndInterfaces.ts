/* Objects and Interfaces */

// Interfaces
interface User {
  id: number
  name: string
  email?: string // Optional property
}

let user: User = {
  id: 1,
  name: 'Alice',
}

// Extending interfaces
interface Admin extends User {
  role: string
}

// Type Aliases
type Point = {
  x: number
  y: number
}

type ID = string | number

/* 
* Difference Between Interface and Type *

- Interfaces can be extended and merged
- Types can represent any type (unions, primitives, etc.)
- Use interfaces for objects you might extend
- Use types for unions, aliases, and utilities 
*/

export {}
