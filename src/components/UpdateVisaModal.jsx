import { useState } from 'react';
import {Modal, Form, Input, Button, message, Select} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { getBaseApiUrl } from "../utils/getBaseApiUrl.jsx";

export default function UpdateVisaModal({ visa, refreshVisas }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const baseURL = getBaseApiUrl();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleUpdate = async () => {
        try {
            const values = await form.validateFields();
            setLoading(true);
            const response = await fetch(`${baseURL}/visa/${visa._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                throw new Error('Failed to update visa');
            }

            const updatedVisa = await response.json();
            console.log("Success:", updatedVisa);
            message.success("Visa updated successfully!");
            setIsModalVisible(false);
            refreshVisas();
        } catch (error) {
            console.error('Error updating visa:', error);
            message.error("Failed to update visa");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button
                icon={<EditOutlined />}
                onClick={showModal}
                className="w-full"
            >
                Edit Visa
            </Button>

            <Modal
                title="Update Visa Details"
                open={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={handleUpdate}
                        loading={loading}
                        className="bg-blue-500 hover:bg-blue-600"
                    >
                        Update
                    </Button>
                ]}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="update_visa_form"
                    initialValues={{
                        visaType: visa.visaType,
                        countryImage: visa.countryImage,
                        countryName: visa.countryName,
                        processingTime: visa.processingTime,
                        fee: visa.fee,
                        validity: visa.validity,
                        applicationMethod: visa.applicationMethod
                    }}
                >
                    <Form.Item
                        name="countryImage"
                        label="Country Image"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="countryName"
                        label="Country Name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="processingTime"
                        label="Processing Time"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="visaType"
                        label="Visa Type"
                    >
                        <Select className="w-full">
                            <Select.Option value="All">All Types</Select.Option>
                            <Select.Option value="Tourist Visa">Tourist Visa</Select.Option>
                            <Select.Option value="Student Visa">Student Visa</Select.Option>
                            <Select.Option value="Skilled Worker Visa">Skilled Worker Visa</Select.Option>
                            <Select.Option value="Work Visa">Work Visa</Select.Option>
                            <Select.Option value="Job Seeker Visa">Job Seeker Visa</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="fee"
                        label="Fee"
                    >
                        <Input
                            prefix="$"
                            type="number"
                        />
                    </Form.Item>
                    <Form.Item
                        name="validity"
                        label="Validity"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="applicationMethod"
                        label="Application Method"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

