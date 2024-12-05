import {ArrowRightOutlined} from "@ant-design/icons";
import {Select} from "antd";
import {useEffect, useState} from "react";
import {getBaseApiUrl} from "../utils/getBaseApiUrl.jsx";

export default function AllVisa() {
    const [visas, setVisas] = useState([]);
    const baseURL = getBaseApiUrl();

    console.log(visas);


    const fetchVisas = async () => {
        try {
            const response = await fetch(`${baseURL}/visa`);
            const data = await response.json();
            setVisas(data);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    useEffect(() => {
        fetchVisas();
    }, [])


    return (
        <div className={"container mx-auto py-20"}>
            <h1 className="text-3xl font-bold mb-8">All Visas</h1>
            <div className="mb-8">
                <label htmlFor="visa-type" className="block text-sm font-medium text-gray-700 mb-2">Filter by Visa
                    Type</label>

                <Select className={"min-w-32"}>
                    <Select.Option value="all">All Types</Select.Option>
                    <Select.Option value="tourist">Tourist Visa</Select.Option>
                    <Select.Option value="student">Student Visa</Select.Option>
                    <Select.Option value="work">Work Visa</Select.Option>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visas?.map((visa) => (
                    <div key={visa.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={visa.countryImage} alt={visa.countryName} className="w-full h-40 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">{visa.countryName}</h3>
                            <p className="text-gray-600 mb-2">{visa.visaType.charAt(0).toUpperCase() + visa.visaType.slice(1)} Visa</p>
                            <p className="text-sm text-gray-500 mb-4">Processing Time: {visa.processingTime}</p>
                            <p className="text-sm text-gray-500 mb-4">Description: {visa.description}</p>
                            <a href="#" className="text-blue-500 font-bold flex items-center hover:underline">
                                See Details <ArrowRightOutlined className="ml-1" size={16}/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

