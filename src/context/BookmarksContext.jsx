import { createContext, useContext, useState, useEffect } from "react"
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"
import { db } from "../firebase"
import { useAuth } from "./AuthContext"

const BookmarksContext = createContext();

export const BookmarkProvider = ({ children }) => {
    const { user } = useAuth()
    const [bookmarked, setBookmarked] = useState({});
    const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

    useEffect(() => {
        if (!user) {
            setBookmarked({});
            setBookmarkedMovies([]);
            return;
        }

        const fetchBookmarks = async () => {
            const docRef = doc(db, "bookmarks", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const movies = docSnap.data().movies || [];
                setBookmarkedMovies(movies);
                const map = {};
                movies.forEach((m) => { map[m.id] = true });
                setBookmarked(map);
            } else {
                setBookmarkedMovies([]);
                setBookmarked({});
            }
        }

        fetchBookmarks();
    }, [user]);

    const toggleBookmark = async (movie) => {
        if (!user) return;

        const docRef = doc(db, "bookmarks", user.uid);
        const isBookmarked = bookmarked[movie.id];

        if (isBookmarked) {
            await updateDoc(docRef, { movies: arrayRemove(movie) });
            setBookmarked((prev) => ({ ...prev, [movie.id]: false }));
            setBookmarkedMovies((prev) => prev.filter((m) => m.id !== movie.id));
        } else {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                await updateDoc(docRef, { movies: arrayUnion(movie) });
            } else {
                await setDoc(docRef, { movies: [movie] });
            }
            setBookmarked((prev) => ({ ...prev, [movie.id]: true }));
            setBookmarkedMovies((prev) => [...prev, movie]);
        }
    }

    return (
        <BookmarksContext.Provider value={{ bookmarked, bookmarkedMovies, toggleBookmark }}>
            {children}
        </BookmarksContext.Provider>
    );
};

export const useBookmarks = () => useContext(BookmarksContext);