// Using 'any' everywhere
// ❌ Avoid
function processDataAny(data: any) {}

// ✅ Better
function processDataUnknown(data: unknown) {
  if (typeof data === 'string') {
    console.log('Data is a string')
  } else if (Array.isArray(data)) {
    console.log('Data is an array')
  } else if (data instanceof Date) {
    console.log('Data is a date')
  } else {
    console.log('Data is something else')
  }
}

// Over-typing when inference works
// ❌ Unnecessary
const numbersOverTyped: number[] = [1, 2, 3]

// ✅ Better
const numbers = [1, 2, 3]

// Misunderstanding structural typing
interface Point {
  x: number
  y: number
}
//
// This works!  uses structural typing
// const point: Point = { x: 10, y: 20, z: 30 }

export {}
