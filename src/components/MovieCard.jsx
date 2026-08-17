import { Bookmark } from "lucide-react";

export const MovieCard = ({ movie, isBookmarked, onToggleBookmark }) => {
    return (
        <div
            key={movie.id}
            className="relative bg-cover bg-center w-96 h-60 rounded-xl shrink-0 overflow-hidden"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`
            }}
        >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent rounded-xl"></div>

            <button
                onClick={() => onToggleBookmark(movie.id)}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-200"
            >
                <Bookmark
                    size={18}
                    className={isBookmarked ? "fill-white text-white" : "text-white"}
                />
            </button>

            <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white/70 text-sm mb-1">
                    {movie.release_date?.slice(0, 4) || movie.first_air_date?.slice(0, 4)}
                    {" • "}
                    {movie.media_type === "movie" ? "Movie" : "TV Series"}
                </p>
                <h3 className="text-white font-semibold text-lg">
                    {movie.title || movie.name}
                </h3>
            </div>
        </div>
    )
}

