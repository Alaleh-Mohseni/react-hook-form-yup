import { useEffect, useState, createContext } from "react";
import { auth } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";
import Loader from "../components/Loader";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [pending, setPending] = useState(true);

    function signup(auth, email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(auth, email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(auth) {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setPending(false)
        });
        return unsubscribe
    }, []);

    if (pending) {
        return <Loader/>
    }

    const value = {
        currentUser,
        login,
        signup,
        logout,
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider