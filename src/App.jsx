import Navbar from "./Components/Navbar";
import PageRouter from "./PageRouter";
import "./Styles/styles.scss";
import { Router } from "wouter";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.jsx";
import Home from "./Pages/Home.jsx";

export default function App() {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return;
    }
    if (error) {
        alert(error.message);
    }
    if (!user) {
        return <Home />;
    } else {
        return (
            <>
                <img id="background" src="background.webp" />
                <Navbar />
                <Router>
                    <PageRouter />
                </Router>
            </>
        );
    }
}
