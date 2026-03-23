function generatePostsHTML(posts) {
  return posts
    .map(
      (post) => `
        <li class="recent-posts__item">
              <article class="post-card">
                <img
                  class="post-card__img"
                  src="${post.img}"
                  alt="${post.alt}"
                />
                <time datetime="${post.date}" class="post-card__date uppercase"
                  >${new Date(post.date).toDateString()}</time
                >
                <h3 class="post-card__title">${post.title}</h3>
                <p class="post-card__desc">
                  ${post.desc}
                </p>
              </article>
            </li>`
    )
    .join("\n");
}

function nextPage(state) {
  return { ...state, page: state.page + 1 };
}

export { generatePostsHTML, nextPage };
