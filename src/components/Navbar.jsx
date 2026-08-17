import { NavLink } from "react-router";

import { Clapperboard, Home, Film, Tv, Bookmark } from "lucide-react"
import avatarIcon from "../assets/hero.png"
const Navbar = () => {
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
            <img src={avatarIcon} alt="" className=" rounded-full border border-white w-25" />
        </div>
    )
}

export default Navbar