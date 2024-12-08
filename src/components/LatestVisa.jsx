import {ArrowRightOutlined} from "@ant-design/icons";
import {getBaseApiUrl} from "../utils/getBaseApiUrl.jsx";
import {useEffect, useState} from "react";
import {Spin} from "antd";
import {Link} from "react-router-dom";

export default function LatestVisa() {
    const [latestVisas, setLatestVisas] = useState([]);
    const [loading, setLoading] = useState(false);
    const baseURL = getBaseApiUrl();

    const fetchLatestVisas = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${baseURL}/latestVisas`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setLatestVisas(data);
            setLoading(false);
        } catch (error) {
            console.error("Error:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchLatestVisas();
    }, [])

    return (
        <section className="py-20 container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
                Latest Visas
            </h2>
            <Spin spinning={loading}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestVisas.map((latestVisa) => (
                        <div
                            key={latestVisa._id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300"
                        >
                            <img
                                src={latestVisa.countryImage}
                                alt="Country"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                                    {latestVisa.countryName}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {latestVisa.visaType}
                                </p>
                                <ul className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                                    <li>Processing Time: {latestVisa.processingTime}</li>
                                    <li>Fee: ${latestVisa.fee}</li>
                                    <li>Validity: {latestVisa.validity}</li>
                                </ul>
                                <Link
                                    to={`/visa/${latestVisa._id}`}
                                    className="text-blue-500 dark:text-blue-400 font-bold flex items-center hover:underline"
                                >
                                    See Details <ArrowRightOutlined className="ml-1" size={16}/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Spin>
            <div className="text-center mt-8">
                <Link
                    to={"/all-visas"}
                    className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold
                               hover:bg-blue-600
                               dark:bg-blue-600 dark:hover:bg-blue-700
                               transition duration-300"
                >
                    See All Visas
                </Link>
            </div>
        </section>
    )
}