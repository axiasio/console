import React, {useEffect} from "react";
import {Button, Divider, Dropdown, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {UserOutlined} from "@ant-design/icons";
import {loadProfile, onBoardingCheck} from "./profileSlice";

const {Text} = Typography;

export function Profile() {
    const dispatch = useDispatch()
    const {profile} = useSelector((state) => state.profile)
    useEffect(() => {
        dispatch(loadProfile())
    }, [])

    const items = [
        {
            label: (
                <a target="_blank">
                    Switch Organization
                </a>
            ),
            key: '0',
        },
    ];
    return (
        <div>
            <Divider type={"vertical"}/>
            <Text style={{marginRight: "5px"}}>orgId: {profile.orgs[0]} </Text>
            <Divider type={"vertical"}/>
            <Text style={{marginRight: "5px"}}>{profile.email}</Text>
            <Dropdown
                menu={{
                    items,
                }}
            >
                <Button type="default" shape="circle" icon={<UserOutlined/>}/>
            </Dropdown>
        </div>
    )
}