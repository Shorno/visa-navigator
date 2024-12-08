import {Card, Col, Row, message, Button, Flex, Spin, Empty} from "antd";
import {useEffect, useState} from "react";
import {getBaseApiUrl} from "../utils/getBaseApiUrl.jsx";
import {useAuth} from "../contexts/AuthContext.jsx";
import UpdateVisaModal from "../components/UpdateVisaModal.jsx";

export default function MyVisas() {
    const [myVisas, setMyVisas] = useState([]);
    const [loading, setLoading] = useState(true);
    const {currentUser} = useAuth();
    const baseURL = getBaseApiUrl();

    const getVisasByEmail = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${baseURL}/visa?email=${currentUser.email}`);
            if (!response.ok) {
                throw new Error('Failed to fetch visas');
            }
            const data = await response.json();
            setMyVisas(data);
        } catch (error) {
            console.error("Error:", error);
            message.error("Failed to fetch visas");
        } finally {
            setLoading(false);
        }
    };

    const deleteVisa = async (visaId) => {
        try {
            const response = await fetch(`${baseURL}/visa/${visaId}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Failed to delete visa');
            }
            message.success("Visa cancelled successfully!");
            getVisasByEmail();
        } catch (error) {
            console.error("Error:", error);
            message.error("Failed to delete visa");
        }
    }

    useEffect(() => {
        getVisasByEmail();
    }, []);

    if (myVisas.length === 0) {
        return <div className={"h-screen w-full flex justify-center items-center"}>
            <Empty className={"text-3xl"} description="No visas found. Please add Visa to see in the list"/>
        </div>
    }


    return (
        <div className="py-20 container mx-auto">
            <h1 className="text-3xl font-bold mb-8">My Visas</h1>
            <Row gutter={[16, 16]}>
                {myVisas.map((visa) => (
                    <Col key={visa._id} xs={24} sm={12} lg={8}>
                        <Spin spinning={loading}>
                            <Card className="shadow-md">
                                <img src={visa.countryImage} alt="Country" className="w-full h-60 object-cover"/>
                                <h3 className="text-xl font-bold mb-2">{visa.countryName}</h3>
                                <p className="text-gray-600 mb-4">{visa.visaType}</p>
                                <ul className="text-sm text-gray-500 mb-4">
                                    <li>Processing Time: {visa.processingTime}</li>
                                    <li>Fee: ${visa.fee}</li>
                                    <li>Validity: {visa.validity}</li>
                                    <li>Application Method: {visa.applicationMethod}</li>
                                </ul>
                                <Flex gap={20}>
                                    <UpdateVisaModal visa={visa} refreshVisas={getVisasByEmail}/>
                                    <Button onClick={() => deleteVisa(visa._id)} type="primary" danger>Delete</Button>
                                </Flex>
                            </Card>
                        </Spin>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

