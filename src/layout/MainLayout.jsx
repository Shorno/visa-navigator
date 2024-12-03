import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {

    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}