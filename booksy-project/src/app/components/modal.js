import { renderBookModalContent } from "../render/bookModalContent";
import fetchBookId from "../services/fetchBookId";
import refs from "../utils/refs";

refs.booksList.addEventListener("click", onBookListClick);

function onBookListClick(event) {
  const currEl = event.target;

  const bookCard = currEl.closest(".js-book-card");
  if (bookCard === null) {
    return;
  }
  const {
    dataset: { bookId: id },
  } = bookCard;
  fetchBookId(id)
    .then(bookInfo => {
      renderBookModalContent(bookInfo, refs.bookModal);
      refs.bookModal.showModal();
    })
    .catch(err => {
      console.log(err.message);
    });
}
