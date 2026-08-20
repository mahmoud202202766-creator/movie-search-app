import { useState, useEffect } from "react"
import { searchMulti } from "../api/tmdb"
import RecommendedCard from "../components/RecommendedCard"
import { useSearchParams } from "react-router"


const SearchResults = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");


    useEffect(() => {
        const getMovies = async () => {
            const res = await searchMulti(query);
            setMovies(res)
        }
        getMovies()
    }, [query])



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

export default SearchResults