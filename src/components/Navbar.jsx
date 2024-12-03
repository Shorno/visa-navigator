import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated);
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    Visa Navigator
                </Link>
                <div className="space-x-4">
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
                    {isAuthenticated ? (
                        <div className="inline-block relative group">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />
                            <div
                                className="absolute right-0 w-48 bg-white rounded-md shadow-lg py-1 mt-2 invisible group-hover:visible">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Profile
                                </Link>
                                <button
                                    onClick={toggleAuth}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={toggleAuth}
                            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
                        >
                            Login/Register
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};


