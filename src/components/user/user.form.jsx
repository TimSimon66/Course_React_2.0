import { Input } from "antd";
import { Button, Flex } from 'antd';
const UserForm = () => {

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input />
                </div>
                <div>
                    <span>Email</span>
                    <Input />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input />
                </div>
            </div>
            <div>
                <Button type="primary"> Create User </Button>
            </div>
        </div>
    )
}

export default UserForm