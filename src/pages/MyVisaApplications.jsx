import {useState, useEffect} from 'react';
import {Card, Col, Row, Button, Spin, message, Empty, Flex} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {getBaseApiUrl} from "../utils/getBaseApiUrl.jsx";
import {useAuth} from "../contexts/AuthContext.jsx";
import Search from "antd/es/input/Search.js";


export default function MyVisaApplications() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredApplications, setFilteredApplications] = useState([]);
    const {currentUser} = useAuth();

    const baseURL = getBaseApiUrl();

    const getApplicationsByEmail = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${baseURL}/visaApplication?email=${currentUser.email}`);
            if (!response.ok) {
                throw new Error('Failed to fetch applications');
            }
            const data = await response.json();
            setApplications(data);
            setFilteredApplications(data);
        } catch (error) {
            console.error("Error:", error);
            message.error("Failed to fetch applications");
        } finally {
            setLoading(false);
        }
    };

    const deleteApplication = async (applicationId) => {
        try {
            const response = await fetch(`${baseURL}/visaApplication/${applicationId}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Failed to delete application');
            }
            message.success("Application deleted successfully!");
            getApplicationsByEmail();
        } catch (error) {
            console.error("Error:", error);
            message.error("Failed to delete application");
        }
    }

    useEffect(() => {
        getApplicationsByEmail();
    }, []);

    if (applications.length === 0) {
        return <div className={"h-screen w-full flex justify-center items-center"}>
            <Empty className={"text-3xl"} description="No Visa Application found. Please apply to see in the list."/>
        </div>
    }

    const onSearch = (value) => {
        const filtered = applications.filter(app =>
            app.countryName.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredApplications(filtered);
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 dark:text-white">My Visa Applications</h1>
            <Spin spinning={loading}>
                <Flex justify={"end"} className={"py-10 max-w-96"}>
                    <Search
                        placeholder="Search Visa Applications"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </Flex>
                <Row gutter={[16, 16]}>
                    {filteredApplications.map((app) => (
                        <Col xs={24} sm={12} lg={8} key={app._id}>
                            <Card
                                cover={<img alt={app.country} src={app.countryImage} className="h-48 object-cover"/>}
                                actions={[
                                    <Button
                                        onClick={() => deleteApplication(app._id)}
                                        key={app._id}
                                        type="primary"
                                        danger
                                        icon={<DeleteOutlined/>}
                                    >
                                        Cancel Application
                                    </Button>
                                ]}
                            >
                                <Card.Meta
                                    title={`${app.countryName} - ${app.visaType}`}
                                    description={
                                        <ul className="space-y-1 text-sm">
                                            <li><strong>Processing Time:</strong> {app.processingTime}</li>
                                            <li><strong>Fee:</strong> ${app.fee}</li>
                                            <li><strong>Validity:</strong> {app.validity}</li>
                                            <li><strong>Application Method:</strong> {app.applicationMethod}</li>
                                            <li><strong>Applied Date:</strong> {app.appliedDate}</li>
                                            <li><strong>Applicant:</strong> {app.firstName} {app.lastName}</li>
                                            <li><strong>Email:</strong> {app.email}</li>
                                        </ul>
                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Spin>
        </div>
    );
}

