import { Input, notification } from "antd";
import { Button, Flex } from 'antd';
import { useState } from "react";
import axios from "axios";
import { createUserAPI } from "../../services/api_services";
const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone)

        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tao user thang cong"
            })
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        console.log(">>>> check ", res.data)

    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}

                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}

                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
            </div>
            <div>
                <Button type="primary" onClick={handleClickBtn}> Create User </Button>
            </div>
        </div>
    )
}

export default UserForm