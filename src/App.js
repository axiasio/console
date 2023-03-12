import {FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined} from '@ant-design/icons';
import React from 'react';
import {Provider} from "react-redux";
import {ConfigProvider, theme, Card, Typography, Button} from 'antd';
import {Layout, Menu,} from 'antd';
import {useState} from 'react';
import {store} from "./store";
import {AppHeader} from "./appHeader/AppHeader";
import 'antd/dist/reset.css';
import './App.css';


const {Header, Footer, Sider, Content} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined/>),
    getItem('Option 2', '2', <DesktopOutlined/>),
    getItem('User', 'sub1', <UserOutlined/>, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined/>),
];

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Provider store={store}>
            <ConfigProvider theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    fontFamily: 'Avenir Next, serif',
                },
            }}
            >
                <Layout style={{minHeight: '100vh'}}>
                    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <div
                            style={{
                                height: 32,
                                margin: 16,
                                background: 'rgba(255, 255, 255, 0.2)',
                                textAlign: "center"
                            }}>
                            <Typography.Title level={4} style={{margin: 0}}>
                                unbounds.io
                            </Typography.Title>
                        </div>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
                    </Sider>
                    <Layout>
                        <AppHeader/>
                        <Content style={{margin: '0 16px'}}>
                            <div style={{padding: 24, minHeight: 360}}>
                                <Card title="Card title">Bill is a cat.</Card>
                            </div>
                        </Content>
                        <Footer/>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </Provider>
    )
}

export default App;