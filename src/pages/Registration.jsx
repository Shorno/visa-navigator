import {Form, Input, Button, Typography, message} from 'antd';
import {UserOutlined, MailOutlined, LockOutlined, LinkOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const {Title} = Typography;

export default function Registration() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values:', values);
        message.success('Registration successful!');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Title level={2} className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Register for Visa Navigator
                </Title>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Form
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                        layout="vertical"
                    >
                        <Form.Item
                            name="name"
                            rules={[{required: true, message: 'Please input your name!'}]}
                        >
                            <Input prefix={<UserOutlined/>} placeholder="Name"/>
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                {type: 'email', message: 'The input is not valid E-mail!'},
                                {required: true, message: 'Please input your E-mail!'}
                            ]}
                        >
                            <Input prefix={<MailOutlined/>} placeholder="Email"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password prefix={<LockOutlined/>} placeholder="Password"/>
                        </Form.Item>
                        <Form.Item
                            name="photoUrl"
                            rules={[{required: true, message: 'Please input your photo URL!'}]}
                        >
                            <Input prefix={<LinkOutlined/>} placeholder="Photo URL"/>
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="text-center">
                        <span className="text-gray-600">Already have an account? </span>
                        <Link to="/login" className="text-blue-600 hover:text-blue-800">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

