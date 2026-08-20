import { useState } from "react"
import { useNavigate } from "react-router"
import { Search } from "lucide-react"


const SearchBar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    }
    return (

        <form onSubmit={handleSearch} className="flex gap-3.5 my-5 w-fit rounded-2xl items-center">
            <Search />
            <input
                className="px-5 w-full py-1.5 border-none outline-none focus:outline-none"
                type="text"
                placeholder="Search for movies or TV series"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}
export default SearchBar;