import {createContext, useContext} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase.js"

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {


    const signUp = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            return userCredential;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    const values = {
        signUp
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}