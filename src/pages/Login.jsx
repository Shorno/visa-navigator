import {Form, Input, Button, Checkbox, Typography, message} from 'antd';
import {MailOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const {Title} = Typography;

export default function Login() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values:', values);
        // Here you would typically send the data to your backend for authentication
        message.success('Login successful!');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Title level={2} className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Log in to Visa Navigator
                </Title>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Form
                        form={form}
                        name="login"
                        onFinish={onFinish}
                        initialValues={{remember: true}}
                        layout="vertical"
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {type: 'email', message: 'The input is not a valid E-mail!'},
                                {required: true, message: 'Please input your E-mail!'}
                            ]}
                        >
                            <Input prefix={<MailOutlined/>} placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your Password!'}]}
                        >
                            <Input.Password prefix={<LockOutlined/>} placeholder="Password"/>
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Link className="float-right text-blue-600 hover:text-blue-800" to="/forgot-password">
                                Forgot password
                            </Link>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full">
                                Log in
                            </Button>
                        </Form.Item>

                        <div className="text-center">
                            <span className="text-gray-600">Don&#39;t have an account? </span>
                            <Link to="/register" className="text-blue-600 hover:text-blue-800">
                                Register now
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};
