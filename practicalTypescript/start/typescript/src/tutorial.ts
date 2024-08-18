


/*

//Interface - Fundamentals

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
};

deepWork.title = 'New Title'; // allowed


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
