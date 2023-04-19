const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const libObj = JSON.stringify(library)

console.log(libObj);
