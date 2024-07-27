import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api_services';
import { useState } from 'react';

const UserTable = () => {

    const [dataUser, setDataUser] = useState([
        { _id: "eric", fullName: 25, email: "hn" },
        { _id: "tin", fullName: 20, email: "dn" }

    ])
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];

    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

    const loadUser = async () => {
        console.log(">>>> run loadUser START")
        const res = await fetchAllUserAPI()
        //setDataUser(res.data)

    }
    loadUser()
    return (
        <Table columns={columns} dataSource={dataUser} />
    )
}

export default UserTable