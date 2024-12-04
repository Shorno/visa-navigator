import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    return (
        <nav className="bg-blue-600 p-4 h-16 flex">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link to="/" className="text-white text-2xl font-bold">
                        Visa Navigator
                    </Link>
                </div>

                <div className="space-x-4 flex items-center">
                    <div className={"space-x-4 hidden md:block"}>
                        <Link to="/" className="text-white hover:text-blue-200">
                            Home
                        </Link>
                        <Link to="/all-visas" className="text-white hover:text-blue-200">
                            All Visas
                        </Link>
                        <Link to="/add-visa" className="text-white hover:text-blue-200">
                            Add Visa
                        </Link>
                        <Link to="/my-visas" className="text-white hover:text-blue-200">
                            My Visas
                        </Link>
                    </div>
                    {isAuthenticated ? (
                        <Link to="/logout" className="text-white hover:text-blue-200">
                            Logout
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className="text-white hover:text-blue-200">
                                Login
                            </Link>
                            <Link
                                to={"/register"}
                                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </nav>
    );
};


