const myKey = "c1ba4c27";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const movieArea = document.getElementById("movie-container");

const popupDiv = document.getElementById("movie-popup");
const popupInfo = document.getElementById("popup-movie-details");
const closeButton = document.getElementById("close-popup");

// Close popup if clicking X or background
closeButton.onclick = () => closePopup();
popupDiv.onclick = function (e) {
  if (e.target === popupDiv) closePopup();
};

searchForm.onsubmit = function (e) {
  e.preventDefault();
  let query = searchInput.value;
  query = query.trim();
  if (!query) {
    alert("Hey, type a movie name!");
    return;
  }
  searchMovies(query);
  searchInput.value = "";
};

function closePopup() {
  popupDiv.classList.add("hidden");
  popupInfo.innerHTML = "";
}

// Fetch movies by search term
async function searchMovies(name) {
  movieArea.innerHTML = "<p>Loading movies...</p>";
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${myKey}&s=${name}`
    );
    const data = await res.json();

    movieArea.innerHTML = "";

    if (data.Response === "False") {
      movieArea.textContent = data.Error;
      return;
    }

    data.Search.forEach((movie) => {
      addMovieCard(movie);
    });
  } catch (err) {
    console.error(err);
    movieArea.textContent = "Something went wrong, try again.";
  }
}

// Create and append each movie card
function addMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";

  let posterUrl =
    movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200";

  card.innerHTML = `
    <figure><img src="${posterUrl}" alt="${movie.Title}"></figure>
    <h3>${movie.Title}</h3>
    <p>${movie.Year}</p>
  `;

  card.onclick = async function () {
    popupInfo.innerHTML = "<p>Loading details...</p>";
    popupDiv.classList.remove("hidden");
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${myKey}&i=${movie.imdbID}&plot=full`
      );
      const details = await res.json();

      let poster =
        details.Poster !== "N/A"
          ? details.Poster
          : "https://via.placeholder.com/400";

      popupInfo.innerHTML = `
        <img src="${poster}" alt="${details.Title}">
        <h2>${details.Title} (${details.Year})</h2>
        <p><strong>Genre:</strong> ${details.Genre}</p>
        <p><strong>Director:</strong> ${details.Director}</p>
        <p><strong>Actors:</strong> ${details.Actors}</p>
        <p><strong>Plot:</strong> ${details.Plot}</p>
        <p><strong>IMDB Rating:</strong> ${details.imdbRating}</p>
      `;
    } catch {
      popupInfo.textContent = "Could not load details. Try again.";
    }
  };

  movieArea.appendChild(card);
}
