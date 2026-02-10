import { renderCategories } from "../render/categories";
import refs from "./refs";
import { fetchBookCategories } from "../services/getBooksCategories";
import { fetchBooks } from "../services/fetchBooks";
import { renderBooks } from "../render/books";

export function initCategories() {
  fetchBookCategories().then(data => {
    renderCategories(data, refs.categoryList);
  });
}

export function initBooks() {
  fetchBooks().then(data => {
    renderBooks(data, refs.booksList);
  });
}
