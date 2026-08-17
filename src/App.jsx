import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Bookmarks from "./pages/Bookmarks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


function App() {
  return (
    <div className="min-h-screen bg-[#10141E] text-white flex overflow-hidden">
      <Navbar />
      <main className="flex-1 p-8 min-w-0">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/bookmarks" element={< Bookmarks />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App