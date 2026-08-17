import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import TvShows from "./components/pages/TvShows";
import Bookmarks from "./components/pages/Bookmarks";

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

        </Routes>
      </main>
    </div>
  )
}

export default App