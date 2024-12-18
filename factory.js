class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const createBook = (title, author, isbn) => ({
  title,
  author,
  isbn,
});

export const book1 = createBook("Harry Porter", "JK Rowling", "ABC123");

export const book2 = createBook("The great Gasby", "F. Scott", "ABC246");

export const book3 = createBook("Moby0Dick", "Marry", "ABC789");

export const book4 = new Book("Harry Porter", "JK Rowling", "ABC123");

/** Different Objects */

// export const Book1 = {
//   title: "Harry Porter",
//   author: "JK Rowling",
//   isbn: "ABC123",
// };

// export const book2 = {
//   title: "The great Gasby",
//   author: "F. Scott",
//   isbn: "ABC246",
// };

// export const book3 = {
//   title: "Moby0Dick",
//   author: "Marry",
//   isbn: "ABC789",
// };
