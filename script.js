const initialItems = document.querySelectorAll(".movie-item");
initialItems.forEach((item) => attachMovieItemEventLiseners(item));

document
  .getElementById("movie-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("movie-title");
    const year = document.getElementById("movie-year");

    addMovieToList(title.value, year.value);
    document.getElementById("movie-form").reset();
  });

function addMovieToList(title, year) {
  const movieList = document.getElementById("movie-list");
  const li = document.createElement("li");
  li.className = "movie-item";

  li.innerHTML = `
    <div class="movie-item-info">
      <h3>${title}</h3>
      <span>Godina: <em>${year}</em></span>
    </div>
    <div class="controls">
      <div class="up-down">
        <button class="up-btn">&#9650;</button>
        <button class="down-btn">&#9660;</button>
      </div>
      <div>
      <button class="delete-btn">&#10005;</button>
      </div>
    </div>
    `;
  movieList.appendChild(li);

  attachMovieItemEventLiseners(li);
}

function attachMovieItemEventLiseners(li) {
  const movieList = document.getElementById("movie-list");

  li.querySelector(".up-btn").addEventListener("click", function () {
    const prevListItem = li.previousElementSibling;
    if (prevListItem) {
      movieList.insertBefore(li, prevListItem);
    }
  });

  li.querySelector(".down-btn").addEventListener("click", function () {
    const nextlistItem = li.nextElementSibling;
    if (nextlistItem) {
      movieList.insertBefore(nextlistItem, li);
    }
  });

  li.querySelector(".delete-btn").addEventListener("click", function () {
    movieList.removeChild(li);
  });
}
