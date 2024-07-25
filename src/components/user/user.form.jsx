import { Input } from "antd";
import { Button, Flex } from 'antd';
import { useState } from "react";
const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setFullEmail] = useState("")
    const [password, setFullPassword] = useState("")
    const [phoneNumber, setFullPhoneNumber] = useState("")
    const handleClickBtn = () => {
        console.log(">>>> check ", { fullName, email, password, phoneNumber })
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
                        onChange={(event) => setFullEmail(event.target.value)}

                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => setFullPassword(event.target.value)}

                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phoneNumber}
                        onChange={(event) => setFullPhoneNumber(event.target.value)}
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