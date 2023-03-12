import React from "react";
import {Col, Divider, Layout, Row, Typography, Dropdown, Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useAuth0} from "@auth0/auth0-react";
import {Profile} from "../profile/Profile"

const {Text} = Typography;


const {Header} = Layout;


export function AppHeader() {
    const {loginWithRedirect, user, isAuthenticated, isLoading} = useAuth0();
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
        <Header>
            <Row>
                <Col span={12}>
                </Col>
                <Col span={12}>
                    <Row justify={"end"}>
                        <Col style={{marginRight: 20}}>
                            <Profile/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    )
}