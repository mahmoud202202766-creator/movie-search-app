const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch trending");
  const data = await res.json();
  return data.results;
};

export const getRecommended = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch recommended");
  const data = await res.json();
  return data.results;
};
