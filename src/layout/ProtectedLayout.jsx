import {useAuth} from "../contexts/AuthContext.jsx";
import {Navigate, useLocation} from "react-router-dom";
import {Spin} from "antd";

export default function ProtectedLayout({children}) {
    const {currentUser, authLoading} = useAuth()
    const location = useLocation()

    if (authLoading) {
        return <Spin size="large" fullscreen/>
    }

    if (!currentUser) {
        return <Navigate to={"/login"} state={{from: location}} replace/>
    }

    return children
}