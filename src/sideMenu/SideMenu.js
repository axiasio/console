import {Layout, Menu, Typography} from "antd";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {DesktopOutlined, PieChartOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {activeMenuEntry, collapse} from "./sideMenuSlice";

const {Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Dashboard', 'dashboard', <PieChartOutlined/>),
    getItem('Trust domains', 'trustdomain/list', <DesktopOutlined/>),
    getItem('Settings', 'settings/list', <UserOutlined/>),

];

export function SideMenu() {
    let navigate = useNavigate();
    const collapsed = useSelector((state) => state.sideMenu.collapsed)
    const selectedKeys = useSelector((state) => state.sideMenu.selectedKeys)
    const defaultOpenKeys = useSelector((state) => state.sideMenu.defaultOpenKeys)
    const dispatch = useDispatch();
    return (
        <Sider collapsible onCollapse={() => dispatch(collapse())} collapsed={collapsed}>
            <div
                style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)', textAlign: "center"}}>
                <Typography.Title level={4} style={{margin: 0}}>
                    unbounds.io
                </Typography.Title>
            </div>
            <Menu
                theme="dark"
                onClick={(item) => {
                    navigate("/" + item.key)
                    dispatch(activeMenuEntry(item.key))
                }}
                defaultOpenKeys={defaultOpenKeys}
                selectedKeys={selectedKeys}
                mode="inline"
                items={items}

            />
        </Sider>
    )
}