import {Form, Input, Select, Checkbox, Button, message} from 'antd';
import {getBaseApiUrl} from "../utils/getBaseApiUrl.jsx";

const {TextArea} = Input;

export default function AddVisa() {

    const baseURL = getBaseApiUrl();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const response = await fetch(`${baseURL}/visa`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
            const data = await response.json();
            console.log("Success:", data);
            message.success("Visa added successfully!");
        } catch (error) {
            console.error("Error:", error);
            message.error("Failed to add new visa");
        }


    };

    return (
        <div className="max-w-2xl my-10 mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Visa Application Form</h1>
            <Form
                requiredMark={false}
                form={form}
                name="visaApplication"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="countryImage"
                    label="Country Image"
                    rules={[{required: true, message: 'Please upload a country image!'}]}
                >
                    <Input className="w-full"/>

                </Form.Item>

                <Form.Item
                    name="countryName"
                    label="Country Name"
                    rules={[{required: true, message: 'Please input the country name!'}]}
                >
                    <Input className="w-full"/>
                </Form.Item>

                <Form.Item
                    name="visaType"
                    label="Visa Type"
                    rules={[{required: true, message: 'Please select a visa type!'}]}
                >
                    <Select className="w-full">
                        <Select.Option value="tourist">Tourist Visa</Select.Option>
                        <Select.Option value="student">Student Visa</Select.Option>
                        <Select.Option value="official">Official Visa</Select.Option>
                        <Select.Option value="business">Business Visa</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="processingTime"
                    label="Processing Time"
                    rules={[{required: true, message: 'Please input the processing time!'}]}
                >
                    <Input className="w-full"/>
                </Form.Item>

                <Form.Item
                    name="requiredDocuments"
                    label="Required Documents"
                    rules={[{required: true, message: 'Please select at least one document!'}]}
                >
                    <Checkbox.Group className="w-full">
                        <div className="grid grid-cols-2 gap-2">
                            <Checkbox value="passport">Valid Passport</Checkbox>
                            <Checkbox value="application">Visa Application Form</Checkbox>
                            <Checkbox value="photo">Recent Passport-sized Photograph</Checkbox>
                            <Checkbox value="financialProof">Proof of Financial Means</Checkbox>
                        </div>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                >
                    <TextArea rows={4} className="w-full"/>
                </Form.Item>

                <Form.Item
                    name="ageRestriction"
                    label="Age Restriction"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter the age!'
                        },
                        {
                            validator: async (_, value) => {

                                if (!value) {
                                    return Promise.resolve();
                                }

                                const numValue = Number(value);
                                if (isNaN(numValue) || numValue <= 0) {
                                    throw new Error('Age must be a positive number!');
                                }
                            }
                        }
                    ]}
                >
                    <Input className="w-full"/>
                </Form.Item>

                <Form.Item
                    validateTrigger={['onChange', 'onBlur']}
                    name="fee"
                    label="Fee"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter fee amount!'
                        },
                        {
                            pattern: /^[0-9]+$/,
                            message: 'Fee must contain only numbers!'
                        },
                        {
                            validator: async (_, value) => {
                                if (!value) {
                                    return Promise.resolve();
                                }

                                const numValue = Number(value);
                                if (isNaN(numValue) || numValue < 0) {
                                    throw new Error('Fee must be a positive number!');
                                }
                            }
                        }
                    ]}
                >
                    <Input
                        className="w-full"/>
                </Form.Item>

                <Form.Item
                    name="validity"
                    label="Validity"
                    rules={[{required: true, message: 'Please input the validity period!'}]}
                >
                    <Input className="w-full"/>
                </Form.Item>

                <Form.Item
                    name="applicationMethod"
                    label="Application Method"
                    rules={[{required: true, message: 'Please input the application method!'}]}
                >
                    <Input className="w-full"/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                        Add Visa
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};


