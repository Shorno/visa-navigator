import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";
import AddVisa from "./pages/AddVisa.jsx";
import ProtectedLayout from "./layout/ProtectedLayout.jsx";
import AllVisa from "./pages/AllVisa.jsx";
import VisaDetails from "./pages/VisaDetails.jsx";
import MyVisas from "./pages/MyVisas.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/register" element={<Registration/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/add-visa" element={<ProtectedLayout><AddVisa/></ProtectedLayout>}/>
                        <Route path="/visa/:id" element={<ProtectedLayout><VisaDetails/></ProtectedLayout>}/>
                        <Route path="/my-visas" element={<ProtectedLayout><MyVisas/></ProtectedLayout>}/>
                        <Route path="/all-visas" element={<AllVisa/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
