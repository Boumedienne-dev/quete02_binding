export class User {
    name: string;
    firstName: string;
    age: number;
    quote: string;
    photoUrl?: string;
  
    constructor(name: string, firstName: string, age: number, quote: string, photoUrl?: string) {
      this.name = name;
      this.firstName = firstName;
      this.age= age;
      this.quote = quote;
      this.photoUrl = photoUrl;
    }
  
    printUser() {
      console.log(this.name);
    }
  }