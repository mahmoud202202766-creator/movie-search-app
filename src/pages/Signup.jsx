import { useState } from "react"
import { useNavigate } from "react-router"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
                <h1 className="text-2xl font-bold text-white">Sign Up</h1>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded bg-zinc-800 text-white"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 rounded bg-zinc-800 text-white"
                />
                <button type="submit" className="bg-red-500 text-white p-2 rounded">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Signup