import {Layout} from "antd";
import {CalendarOutlined, ClockCircleOutlined, DollarCircleOutlined, FileOutlined} from "@ant-design/icons";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBaseApiUrl} from "../utils/getBaseApiUrl.jsx";
import VisaApplicationModal from "../components/VisaApplicationModal.jsx";
import {useAuth} from "../contexts/AuthContext.jsx";

export default function VisaDetails() {
    const [visaDetails, setVisaDetails] = useState([]);
    const {currentUser} = useAuth();
    const {id} = useParams()
    const baseURL = getBaseApiUrl();

    const getVisaById = async () => {
        try {
            const response = await fetch(`${baseURL}/visa/${id}`);
            const data = await response.json();
            setVisaDetails([data]);
            console.log(data)
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        getVisaById();
    },[])



    return (
        <>
            <Layout className={"py-20"}>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8">Visa Details</h1>
                    {visaDetails.map((visa)=> (
                        <div key={visa.countryName} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                            <img src={visa.countryImage} alt="Country"
                                 className="w-full h-64 object-cover"/>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-4">{visa.countryName}  - {visa.visaType}</h2>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center">
                                        <ClockCircleOutlined className="mr-2 text-blue-500"/>
                                        <span>Processing Time: {visa.processingTime}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CalendarOutlined className="mr-2 text-blue-500"/>
                                        <span>Validity: {visa.validity}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <DollarCircleOutlined className="mr-2 text-blue-500"/>
                                        <span>Fee: ${visa.fee}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FileOutlined className="mr-2 text-blue-500"/>
                                        <span>Application Method: {visa.applicationMethod}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2">Required Documents</h3>
                                <ul className="list-disc list-inside mb-6">
                                    {visa.requiredDocuments.map((document, index) => (
                                        <li key={index}>{document}</li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold mb-2">Description</h3>
                                <p className="text-gray-600 mb-6">
                                    {visa.description}
                                </p>

                                <h3 className="text-xl font-bold mb-2">Age Restriction</h3>
                                <p className="text-gray-600 mb-6">
                                    {visa.ageRestriction}
                                </p>
                                <VisaApplicationModal user={currentUser} visa={visa}/>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>

        </>
    )
}