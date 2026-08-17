import { useState, useEffect } from "react"
import { getPopularMovies } from "../api/tmdb"
import RecommendedCard from "../components/RecommendedCard"

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [bookmarked, setBookmarked] = useState({});

    useEffect(() => {
        const getMovies = async () => {
            const res = await getPopularMovies();
            setMovies(res)
        }
        getMovies()
    }, [])

    const toggleBookmark = (id) => {
        setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
    }

    return (
        <div className="grid grid-cols-4 gap-6">
            {movies.map((movie) => (
                <RecommendedCard
                    key={movie.id}
                    movie={movie}
                    isBookmarked={!!bookmarked[movie.id]}
                    onToggleBookmark={toggleBookmark}
                />
            ))}
        </div>
    )
}

export default Movies