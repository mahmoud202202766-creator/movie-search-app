
import { useBookmarks } from "../context/BookmarksContext"
import RecommendedCard from "../components/RecommendedCard"

const Bookmarks = () => {
    const { bookmarkedMovies } = useBookmarks();

    return (
        <div className="grid grid-cols-4 gap-6">
            {bookmarkedMovies.map((movie) => (
                <RecommendedCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default Bookmarks