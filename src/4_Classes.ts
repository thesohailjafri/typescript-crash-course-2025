/* Classes */
// Basic Class
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet(): string {
    return `Hello, I'm ${this.name}`
  }
}
// Access Modifiers
class Employee {
  public name: string // Accessible anywhere
  private salary: number // Only within class
  protected id: number // Within class and subclasses

  constructor(name: string, salary: number, id: number) {
    this.name = name
    this.salary = salary
    this.id = id
  }
}
// Implementing Interfaces
interface Animal {
  name: string
  makeSound(): void
}

class Dog implements Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  makeSound(): void {
    console.log('Woof!')
  }
}

export {}
