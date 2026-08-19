import { useState, useEffect } from "react"
import { getPopularTvShows } from "../api/tmdb"
import RecommendedCard from "../components/RecommendedCard"

const TvShows = () => {
    const [tvShows, setTvShows] = useState([]);


    useEffect(() => {
        const getTvShows = async () => {
            const res = await getPopularTvShows();
            setTvShows(res)
        }
        getTvShows()
    }, [])


    return (
        <div className="grid grid-cols-4 gap-6">
            {tvShows.map((show) => (
                <RecommendedCard
                    key={show.id}
                    movie={show}
                />
            ))}
        </div>
    )
}

export default TvShows