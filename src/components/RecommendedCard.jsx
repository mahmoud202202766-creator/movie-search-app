import { Bookmark } from "lucide-react";

const RecommendedCard = ({ movie, isBookmarked, onToggleBookmark }) => {
    return (
        <div
            key={movie.id}
        >
            <div className="relative rounded-xl overflow-hidden mb-2.5">
                <img
                    className="w-full h-full object-cover"
                    src={
                        movie.backdrop_path
                            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                            : "https://placehold.co/500x281?text=No+Image"
                    }
                    alt={movie.title || movie.name}
                />

                <button
                    onClick={() => onToggleBookmark(movie.id)}
                    className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-200"
                >
                    <Bookmark
                        size={18}
                        className={isBookmarked ? "fill-white text-white" : "text-white"}
                    />
                </button>
            </div>

            <div className="">
                <p className="text-white/70 text-sm mb-1">
                    {movie.media_type === "movie" ? movie.release_date?.slice(0, 4) : movie.first_air_date?.slice(0, 4)}
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

export default RecommendedCard