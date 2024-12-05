import {Form, Input, Button, Typography, message} from 'antd';
import {MailOutlined, LockOutlined, GoogleOutlined} from '@ant-design/icons';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useAuth} from "../contexts/AuthContext.jsx";

const {Title} = Typography;

export default function Login() {
    const [form] = Form.useForm();
    const {signInWithGoogle, login} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const onFinish = async (values) => {
        try {
            const {email, password} = values;
            await login(email, password);
            message.success('Login successful!');
            navigate(from, {replace: true});
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-credential':
                    message.error('Email or Password is incorrect. Please try again');
                    break;
                default:
                    message.error('Failed to login: ' + error.message);
            }
            console.error(error);
        }
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
                            <Link className="float-right text-blue-600 hover:text-blue-800" to="/forgot-password">
                                Forgot password
                            </Link>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full">
                                Log in
                            </Button>
                        </Form.Item>
                        <div className={"flex justify-center items-center py-4"}>
                            <Button
                                onClick={signInWithGoogle}
                            >
                                <span className="text-gray-600">Continue With </span>
                                <GoogleOutlined className={"text-blue-500 text-xl"}/>
                            </Button>
                        </div>
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
