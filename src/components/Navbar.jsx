import {Link} from 'react-router-dom';
import {useAuth} from "../contexts/AuthContext.jsx";
import {Avatar, Button, Popover, Skeleton, Typography} from "antd";

const {Title} = Typography
export default function Navbar() {
    const {currentUser, authLoading, logout} = useAuth();

    const userProfile = (
        <div className={"min-w-32"}>
            <Title level={5}>{currentUser?.displayName}</Title>
            <Button className={"w-full"} onClick={logout} type="primary" danger> Logout</Button>
        </div>
    );


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
                    {authLoading ? (
                        <Skeleton.Avatar active size={40}/>
                    ) : currentUser ? (
                        <Popover trigger={"hover"} content={userProfile}>
                            <Avatar size={40} src={currentUser?.photoURL}>
                                {currentUser?.displayName ? currentUser.displayName[0] : ''}
                            </Avatar>
                        </Popover>

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


