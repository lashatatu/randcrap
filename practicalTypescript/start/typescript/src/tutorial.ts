interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;

  upgradeRam(amount: number): number;
}

const myPC: Computer = {
  id: 1,
  brand: "lenovo",
  ram: 32,
  upgradeRam(amount):number {
    this.ram+=amount
    return this.ram
  },
};

const upgradedPc=myPC.upgradeRam(10)
console.log(upgradedPc)


/*

//Interface - Fundamentals

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor():void
  printTitle(message:string):string
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message){
    return `${this.title} ${message}`
  }
};

// deepWork.title = 'New Title'; // allowed.
deepWork.printAuthor()
const result=deepWork.printTitle('this is awesome book')
console.log(result)

// deepWork.isbn = 654321; // not allowed

*/


/*

//Intersection Types

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: "how to cook a dragon",
  price: 15,
};
const book2: Book = {
  id: 2,
  name: "secret life of unicorns",
  price: 18,
};

const book3: DiscountedBook = {
  id: 3,
  name: "gnomes vs goblins",
  price: 25,
  discount: 0.15,
};
*/
