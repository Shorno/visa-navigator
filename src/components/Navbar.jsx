import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from "../contexts/AuthContext.jsx";
import {
    Avatar,
    Button,
    Drawer,
    Typography,
    Skeleton,
    Switch, Popover
} from "antd";
import {MenuOutlined, MoonOutlined, SunOutlined} from '@ant-design/icons';
import visaLogo from "../assets/visaLogo.png";

const {Title} = Typography;

export default function Navbar() {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const {currentUser, authLoading, logout} = useAuth();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (savedTheme === null && prefersDarkMode)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = (checked) => {
        setIsDarkMode(checked);

        if (checked) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const showDrawer = () => {
        setIsDrawerVisible(true);
    };

    const onClose = () => {
        setIsDrawerVisible(false);
    };

    const userProfile = (
        <div className={"min-w-32"}>
            <Title level={5}>{currentUser?.displayName}</Title>
            <Button className={"w-full"} onClick={logout} type="primary" danger>
                Logout
            </Button>
        </div>
    );

    const DarkModeToggle = () => (
        <div className="flex items-center space-x-2">
            <SunOutlined className="text-yellow-500 dark:text-yellow-300"/>
            <Switch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="bg-gray-300 dark:bg-gray-600"
            />
            <MoonOutlined className="text-indigo-600 dark:text-indigo-300"/>
        </div>
    );

    return (
        <>
            <nav className="md:hidden bg-blue-600 dark:bg-blue-900 p-4 h-16 flex fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-white dark:text-gray-100 text-2xl font-bold flex items-center">
                        <img
                            className="h-20"
                            src={visaLogo}
                            alt="Visa Navigator Logo"
                        />
                        <span>Visa Navigator</span>
                    </Link>

                    <div className="flex items-center space-x-4">
                        <DarkModeToggle/>
                        <button
                            onClick={showDrawer}
                            className="text-white dark:text-gray-100 focus:outline-none"
                        >
                            <MenuOutlined className="text-2xl"/>
                        </button>
                    </div>

                    <Drawer
                        title="Visa Navigator"
                        placement="right"
                        onClose={onClose}
                        open={isDrawerVisible}
                        className="mobile-nav-drawer"
                        bodyStyle={{
                            backgroundColor: 'rgb(37 99 235)', // bg-blue-600
                            color: 'white'
                        }}
                        headerStyle={{
                            backgroundColor: 'rgb(37 99 235)', // bg-blue-600
                            color: 'white'
                        }}
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex-grow space-y-4">
                                <Link to="/" className="block text-white hover:text-blue-200 py-2" onClick={onClose}>
                                    Home
                                </Link>
                                <Link to="/all-visas" className="block text-white hover:text-blue-200 py-2"
                                      onClick={onClose}>
                                    All Visas
                                </Link>
                                <Link to="/add-visa" className="block text-white hover:text-blue-200 py-2"
                                      onClick={onClose}>
                                    Add Visa
                                </Link>
                                <Link to="/my-visas" className="block text-white hover:text-blue-200 py-2"
                                      onClick={onClose}>
                                    My Visas
                                </Link>
                                <Link to="/my-visa-applications" className="block text-white hover:text-blue-200 py-2"
                                      onClick={onClose}>
                                    My Visa Applications
                                </Link>
                            </div>
                            <div className="mt-auto space-y-4">
                                {authLoading ? (
                                    <Skeleton.Avatar active size={40}/>
                                ) : currentUser ? (
                                    <div className="flex flex-col items-center space-y-4">
                                        <Avatar
                                            size={64}
                                            src={currentUser?.photoURL}
                                        >
                                            {currentUser?.displayName ? currentUser.displayName[0] : ''}
                                        </Avatar>
                                        <Title level={5}
                                               className="text-center text-white">{currentUser?.displayName}</Title>
                                        <Button
                                            onClick={() => {
                                                logout();
                                                onClose();
                                            }}
                                            type="primary"
                                            danger
                                            className="w-full"
                                        >
                                            Logout
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col space-y-4">
                                        <Link
                                            to="/login"
                                            className="text-white hover:text-blue-200 py-2 text-center"
                                            onClick={onClose}
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to="/register"
                                            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 text-center"
                                            onClick={onClose}
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Drawer>
                </div>
            </nav>

            <nav className="hidden md:flex bg-blue-600 dark:bg-blue-900 p-4 h-16">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <Link to="/" className="text-white dark:text-gray-100 text-2xl font-bold flex items-center">
                            <img
                                className="h-20"
                                src={visaLogo}
                                alt="Visa Navigator Logo"
                            />
                            <span className={"hidden lg:block"}> Visa Navigator</span>
                        </Link>
                    </div>

                    <div className="space-x-4 flex items-center">
                        <div className={"space-x-4 hidden md:block"}>
                            <Link to="/" className="text-white dark:text-gray-100 hover:text-blue-200">
                                Home
                            </Link>
                            <Link to="/all-visas" className="text-white dark:text-gray-100 hover:text-blue-200">
                                All Visas
                            </Link>
                            <Link to="/add-visa" className="text-white dark:text-gray-100 hover:text-blue-200">
                                Add Visa
                            </Link>
                            <Link to="/my-visas" className="text-white dark:text-gray-100 hover:text-blue-200">
                                My Visas
                            </Link>
                            <Link to="/my-visa-applications"
                                  className="text-white dark:text-gray-100 hover:text-blue-200">
                                My Visa Applications
                            </Link>
                        </div>

                        <DarkModeToggle/>

                        {authLoading ? (
                            <Skeleton.Avatar active size={40}/>
                        ) : currentUser ? (
                            <Popover
                                trigger={"hover"}
                                content={userProfile}
                            >
                                <Avatar size={40} src={currentUser?.photoURL}>
                                    {currentUser?.displayName ? currentUser.displayName[0] : ''}
                                </Avatar>
                            </Popover>
                        ) : (
                            <>
                                <Link to="/login" className="text-white dark:text-gray-100 hover:text-blue-200">
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
        </>
    );
}