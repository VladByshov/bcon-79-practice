import { renderCategories } from "../render/categories";
import refs from "./refs";
import { fetchBookCategories } from "../services/getBooksCategories";

export function init() {
  fetchBookCategories().then(data => {
    renderCategories(data, refs.categoryList);
  });
}
