let books = [
  { title: "The Grapes of Wrath", author: "John Steinbeck", pages: "464" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: "281" },
  { title: "Eragon", author: "Christpher Paolini", pages: "509" },
  { title: "Illuminae", author: "Amie Kaufman", pages: "608" },
  { title: "Mind Gym", author: "Gary Mack", pages: "224" },
];

console.log(`\n Console Output`);

books.forEach((book) =>
  console.log(`${book.title} by ${book.author} (${book.pages} pages)`),
);

console.log(`\n DOM Tree Exploration`);

console.log(`
  ${document}\n
  ${document.body}\n
  ${document.body.firstChild}\n
  ${document.body.children}\n
  `);

console.log(`\n DOM Tree Exploration`);

ulElement = document.body.children[2];
firstLi = ulElement.firstElementChild;
parentOfLi = firstLi.parentElement;
siblingLi = firstLi.nextElementSibling;
console.log(`
  ${ulElement}\n
  ${firstLi}\n
  ${parentOfLi}\n
  ${siblingLi}\n`);

console.log(`\n Node Properties`);

console.log(firstLi.firstChild);

console.log(`\n Styles & Classes`);

listItems = [];

for (let item of ulElement.children) {
  listItems.push(item);
}

console.log(listItems);

books.forEach((book, index) => {
  if (book.pages > 300) {
    listItems[index].classList.add("featured");
    console.log(`${book.title} recieved 'featured' class`);
  }
});
