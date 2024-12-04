import {createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth"
import {auth} from "../firebase.js"

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);


    const signUp = async (email, password, displayName, photoURL) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, {displayName, photoURL});
            console.log(user);
            return userCredential;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    function logout() {
        return signOut(auth);
    }

    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            return userCredential;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setAuthLoading(false);

        });

        return unsubscribe;
    }, []);


    const values = {
        signUp,
        signInWithGoogle,
        currentUser,
        authLoading,
        logout,
        login,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}