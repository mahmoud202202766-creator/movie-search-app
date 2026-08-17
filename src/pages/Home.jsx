import { useState, useEffect, useRef } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { getTrending, getRecommended } from "../api/tmdb"
import { MovieCard } from "../components/MovieCard";
import RecommendedCard from "../components/RecommendedCard";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [bookmarked, setBookmarked] = useState({});
    const scrollRef = useRef(null);

    useEffect(() => {
        const getTrendingMovies = async () => {
            const res = await getTrending();
            setTrendingMovies(res)
        }
        getTrendingMovies()
    }, [])

    useEffect(() => {
        const getRecommendedMovies = async () => {
            const res = await getRecommended();
            setRecommendedMovies(res)
        }
        getRecommendedMovies()
    }, [])


    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    }
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    }

    const toggleBookmark = (id) => {
        setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Trending</h2>
            <div className="relative group">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                > 
                    <ChevronLeft size={24} />
                </button>

                <div ref={scrollRef} className="flex gap-3.5 overflow-x-scroll w-full scrollbar-hide scroll-smooth">
                    {trendingMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            isBookmarked={!!bookmarked[movie.id]}
                            onToggleBookmark={toggleBookmark} />
                    ))}
                </div>

                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Recommended for you</h2>
            <div className="grid grid-cols-4 gap-6">
                {recommendedMovies.map((movie) => (
                    <RecommendedCard
                        key={movie.id}
                        movie={movie}
                        isBookmarked={!!bookmarked[movie.id]}
                        onToggleBookmark={toggleBookmark} />
                ))}
            </div>

        </div>
    )
}

export default Home