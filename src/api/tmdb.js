const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch trending");
  const data = await res.json();
  return data.results;
};

export async function getRecommended() {
  const [moviesRes, tvRes] = await Promise.all([
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`),
    fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`),
  ]);

  const moviesData = await moviesRes.json();
  const tvData = await tvRes.json();

  const movies = moviesData.results.map((item) => ({
    ...item,
    media_type: "movie",
  }));
  const tvShows = tvData.results.map((item) => ({ ...item, media_type: "tv" }));

  return [...movies, ...tvShows];
}

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  const data = await res.json();
  return data.results.map((item) => ({ ...item, media_type: "movie" }));
}

export async function getPopularTvShows() {
  const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch popular TV shows");
  const data = await res.json();
  return data.results.map((item) => ({ ...item, media_type: "tv" }));
}

export async function searchMulti(query) {
  const res = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
  if (!res.ok) throw new Error("Failed to search");
  const data = await res.json();
  return data.results.filter(
    (item) => item.media_type === "movie" || item.media_type === "tv",
  );
}
