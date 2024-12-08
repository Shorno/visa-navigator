import {useState} from 'react';
import {Modal, Form, Input, Button, DatePicker, message} from 'antd';
import dayjs from "dayjs";
import {getBaseApiUrl} from "../utils/getBaseApiUrl.jsx";

export default function VisaApplicationModal({user, visa}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const baseURL = getBaseApiUrl();


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleApply = async () => {
        try {
            const values = await form.validateFields();
            const applicationData = {
                ...values,
                ...visa,
                appliedDate: values.appliedDate.format("DD-MMM-YYYY"),
            }
            const response = await fetch(`${baseURL}/visaApplication`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(applicationData)
            })
            const data = await response.json();
            console.log("Success:", data);
            message.success("Visa Application successful!");

            setIsModalVisible(false);
            form.resetFields();
        } catch (errorInfo) {
            console.log('Validation Failed:', errorInfo);
        }
    };


    return (
        <div>
            <Button
                size={"large"}
                className="bg-blue-500 text-white hover:bg-blue-600"
                onClick={showModal}
            >
                Apply for the Visa
            </Button>

            <Modal
                title="Visa Application"
                open={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>
                    ,
                    <Button
                        onClick={handleApply}
                        key="submit"
                        type="primary"
                        className="bg-blue-500 hover:bg-blue-600"
                    >
                        Apply
                    </Button>
                ]}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="visa_application_form"
                >
                    <Form.Item
                        name="email"
                        label="Email"
                        initialValue={user.email}
                    >
                        <Input disabled/>
                    </Form.Item>

                    <Form.Item
                        name="firstName"
                        label="First Name"
                        rules={[{
                            required: true,
                            message: 'Please input your first name!'
                        }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[{
                            required: true,
                            message: 'Please input your last name!'
                        }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="appliedDate"
                        label="Applied Date"
                        initialValue={dayjs()}
                    >
                        <DatePicker
                            disabled
                            className="w-full"
                            initialValue={dayjs()}
                            format="DD-MMM-YYYY"
                        />
                    </Form.Item>

                    <Form.Item
                        name="fee"
                        label="Visa Fee"
                        initialValue={visa.fee}
                    >
                        <Input
                            prefix="$"
                            value={visa.fee}
                            disabled
                        />
                    </Form.Item>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600"
                    >
                        Apply
                    </Button>
                </Form>
            </Modal>
        </div>
    );
};
