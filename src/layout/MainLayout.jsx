import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {

    return (
        <>
            <Navbar/>
            <div className={"min-h-screen dark:bg-gray-900"}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}