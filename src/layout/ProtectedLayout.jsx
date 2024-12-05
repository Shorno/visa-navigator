import {useAuth} from "../contexts/AuthContext.jsx";
import {Navigate, useLocation} from "react-router-dom";

export default function ProtectedLayout({children}) {
    const {currentUser, authLoading} = useAuth()
    const location = useLocation()

    if (authLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"/>
            </div>
        )
    }

    if (!currentUser) {
        return <Navigate to={"/login"} state={{from: location}} replace/>
    }

    return children
}