import React from "react";
import {Col, Layout, Row} from "antd";
import {Profile} from "../profile/Profile"


const {Header} = Layout;


export function AppHeader() {


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