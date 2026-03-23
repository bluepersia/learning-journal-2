import posts from "../../data/recentPosts.js";
import { generatePostsHTML, nextPage } from "./utils.js";

export default function RecentPosts(root, startPage = 2) {
  let state = {
    page: startPage,
  };

  const maxPages = Math.ceil(posts.length / 3);

  const viewMoreBtn = document.getElementById("view-more");

  viewMoreBtn.addEventListener("click", handleViewMoreClick);

  renderInitial();

  function renderInitial() {
    root.innerHTML = generatePostsHTML(posts.slice(0, state.page * 3));
  }

  function handleViewMoreClick() {
    renderNextPage();

    if (state.page >= maxPages) {
      viewMoreBtn.style.display = "none";
    }
  }

  function renderNextPage() {
    state = nextPage(state);

    const endIndex = state.page * 3;
    const startIndex = endIndex - 3;
    root.innerHTML += generatePostsHTML(posts.slice(startIndex, endIndex));
  }
}
