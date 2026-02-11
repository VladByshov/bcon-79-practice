export function renderBookModalContent(bookData = {}, el) {
  const markup = `
  <div class="book-modal-content">
    <div class="book-modal-left">
        <img
        src="${bookData.book_image}"
        alt="${bookData.title}"
        width="${bookData.book_image_width}"
        height="${bookData.book_image_height}"
        />
    </div>
    <div class="book-modal-right">
        <h2 class="title">${bookData.title}</h2>
        <p class="author">${bookData.author}</p>
        <p class="price">$${bookData.price}</p>
        <div class="btn-wrapper">
        <button class="modal-btn btn-primary" type="button">Add To Cart</button>
        <button class="modal-btn btn-secondary" type="button">Buy Now</button>
        </div>
        <details>
        <summary>Details</summary>
        <p>
            ${bookData.description}
        </p>
        </details>
        <details>
        <summary>Shipping</summary>
        <p>
            We ship across the United States within 2–5 business days. All orders
            are processed through USPS or a reliable courier service. Enjoy free
            standard shipping on orders over $50.
        </p>
        </details>
        <details>
        <summary>Returns</summary>
        <p>
            You can return an item within 14 days of receiving your order, provided
            it hasn’t been used and is in its original condition. To start a return,
            please contact our support team — we’ll guide you through the process
            quickly and hassle-free.
        </p>
        </details>
    </div>
    </div>`;
  el.innerHTML = markup;
}
