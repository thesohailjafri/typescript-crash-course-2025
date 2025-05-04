/* Basic Types */

// Primitive Types
let name: string = 'Alice'
let age: number = 30
let isStudent: boolean = false
let notSure: any = 'could be anything' // Avoid using 'any'
let unknown: unknown = 'safer than any'

// Arrays
let numbers: number[] = [1, 2, 3]
let strings: Array<string> = ['a', 'b', 'c']
let mixed: (string | number)[] = [1, 'two', 3]

// Objects
let user: { name: string; age: number } = {
  name: 'Alice',
  age: 30,
}

// Optional properties
let config: { debug?: boolean } = {}
config.debug = true

export {}
