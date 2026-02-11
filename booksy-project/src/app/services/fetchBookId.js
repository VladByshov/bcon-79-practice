export default function fetchBookId(bookId = "") {
  return fetch(`https://books-backend.p.goit.global/books/${bookId}`).then(
    res => {
      return res.json();
    }
  );
}
