import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
