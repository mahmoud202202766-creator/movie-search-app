
import { useBookmarks } from "../context/BookmarksContext"
import RecommendedCard from "../components/RecommendedCard"

const Bookmarks = () => {
    const { bookmarkedMovies } = useBookmarks();

    return (

        <div>
            <h2 className="text-2xl font-bold mb-4">Bookmarked movies</h2>
            <div className="grid grid-cols-4 gap-6">
                {bookmarkedMovies.map((movie) => (
                    movie.media_type === "movie" &&
                    <RecommendedCard key={movie.id} movie={movie} />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-12">Bookmarked tv shows</h2>
            <div className="grid grid-cols-4 gap-6">
                {bookmarkedMovies.map((movie) => (
                    movie.media_type === "tv" &&
                    <RecommendedCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>

    )
}

export default Bookmarks