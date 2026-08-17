import { useState, useEffect, useRef } from "react"
import { ChevronRight, ChevronLeft, Bookmark } from "lucide-react"
import { getTrending } from "../../api/tmdb"

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [bookmarked, setBookmarked] = useState({});
    const scrollRef = useRef(null);

    useEffect(() => {
        const getTrendingMovies = async () => {
            const res = await getTrending();
            setTrendingMovies(res)
        }
        getTrendingMovies()
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
            <h1 className="text-2xl font-bold mb-4">Trending</h1>
            <div className="relative group">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                    <ChevronLeft size={24} />
                </button>

                <div ref={scrollRef} className="flex gap-3.5 overflow-x-scroll w-full scrollbar-hide scroll-smooth">
                    {trendingMovies.map((trendingMovie) => (
                        <div
                            key={trendingMovie.id}
                            className="relative bg-cover bg-center w-96 h-60 rounded-xl shrink-0 overflow-hidden"
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w500${trendingMovie.backdrop_path})`
                            }}
                        >
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent rounded-xl"></div>

                            <button
                                onClick={() => toggleBookmark(trendingMovie.id)}
                                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-200"
                            >
                                <Bookmark
                                    size={18}
                                    className={bookmarked[trendingMovie.id] ? "fill-white text-white" : "text-white"}
                                />
                            </button>

                            <div className="absolute bottom-0 left-0 p-4">
                                <p className="text-white/70 text-sm mb-1">
                                    {trendingMovie.release_date?.slice(0, 4) || trendingMovie.first_air_date?.slice(0, 4)}
                                    {" • "}
                                    {trendingMovie.media_type === "movie" ? "Movie" : "TV Series"}
                                </p>
                                <h3 className="text-white font-semibold text-lg">
                                    {trendingMovie.title || trendingMovie.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}

export default Home