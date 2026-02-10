// TODO: Get posts info
// console.log(posts);

const form = document.querySelector(".search-form");

form.addEventListener("submit", onSearchFormSubmit);

function renderPosts(posts = []) {
  if (posts.length === 0) {
    return;
  }
  const markup = posts
    .map(
      ({ title, body }) => `
    <div class="post">
      <h2 class="post-title">${title}</h2>
      <p class="post-body">${body}</p>
    </div>
  `
    )
    .join("");
  postContainer.innerHTML = "";
  postContainer.inesrtAdjacentHTML("beforeend", markup);
}

function createTags(tags = []) {
  return tags
    .map(
      tag => `
        <li class="border border-dark rounded-1 text-center text-black-50 fw-lighter">
            <small>${tag}</small>
        </li>`
    )
    .join("");
}

function onSearchFormSubmit(event) {
  event.preventDefault();
  const { target: form } = event;
  const {
    elements: {
      searchQuery: { value: query },
    },
  } = form;

  const searchedPost = searchPost(query);
  renderPosts(searchedPost);
}

function searchPost(query) {
  return posts.filter(
    ({ title, body }) => title.includes(query) || body.includes(query)
  );
}
