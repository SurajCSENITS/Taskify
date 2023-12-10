  let name: string
  // name= 5 // error
  let age: number | string
  let isStudent: boolean
  let hobbies: string[] // array of strings
  let role: [number, string]

  type Person= {
    name: string
    age?: number // optional
  }
  let person: Person= {
    name: "Piyush",
  }
  let lotsOfPersons: Person[]
  
  let printName: (name: string)=>void
  // function printName(name: string){
  //   console.log(name); 
  // }
  let x: unknown

  type X={
    a: string
    b: number
  }
  type Y= X & { // Y and X both
    c: string
    d: number
  }
  // let y: Y={
  //   c: "piyush",
  //   d: 12
  // } // showing error, all a, b, c, d need to be provided