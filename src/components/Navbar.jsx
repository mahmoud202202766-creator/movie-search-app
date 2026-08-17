import { NavLink } from "react-router";
import { Clapperboard, Home, Film, Tv, Bookmark, LogIn, LogOut } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { auth } from "../firebase"
import { signOut } from "firebase/auth"
const Navbar = () => {
    const { user } = useAuth();

    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <div className="w-24 bg-[#161D2F] flex items-center flex-col py-8 px-4 rounded-2xl m-4 justify-between">
            <div className="flex flex-col gap-8">
                <Clapperboard className="text-red-500 mb-8" size={32} />
                <NavLink to="/" end>
                    {({ isActive }) => (
                        <Home
                            className={`transition-all duration-200 cursor-pointer hover:scale-110 ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                                }`}
                        />
                    )}
                </NavLink>
                <NavLink to="/movies">
                    {({ isActive }) => (
                        <Film
                            className={`transition-all duration-200 cursor-pointer hover:scale-110 ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                                }`}
                        />
                    )}
                </NavLink>
                <NavLink to="/tv-shows">
                    {({ isActive }) => (
                        <Tv className={`transition-all duration-200 cursor-pointer hover:scale-110 ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                            }`} />
                    )}
                </NavLink>
                <NavLink to="/bookmarks">
                    {({ isActive }) => (
                        <Bookmark
                            className={`transition-all duration-200 cursor-pointer hover:scale-110 ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                                }`}
                        />
                    )}
                </NavLink>
            </div>
            {user ? (
                <button onClick={handleLogout}>
                    <LogOut className="text-slate-400 hover:text-white cursor-pointer" size={20} />
                </button>
            ) : (
                <NavLink to="/login">
                    <LogIn className="text-slate-400 hover:text-white cursor-pointer" size={20} />
                </NavLink>
            )}
        </div>
    )
}

export default Navbar