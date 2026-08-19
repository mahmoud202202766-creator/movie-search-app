import { useState, useEffect } from "react"
import { getPopularMovies } from "../api/tmdb"
import RecommendedCard from "../components/RecommendedCard"

const Movies = () => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const getMovies = async () => {
            const res = await getPopularMovies();
            setMovies(res)
        }
        getMovies()
    }, [])



    return (
        <div className="grid grid-cols-4 gap-6">
            {movies.map((movie) => (
                <RecommendedCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    )
}

export default Movies