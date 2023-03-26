import {FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined} from '@ant-design/icons';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Provider} from "react-redux";
import {ConfigProvider, theme} from 'antd';
import {Layout, Menu,} from 'antd';
import {store} from "./store";
import {AppHeader} from "./appHeader/AppHeader";
import {SideMenu} from "./sideMenu/SideMenu"
import {Dashboard} from "./dashboard/Dashboard";
import {Settings} from "./settings/Settings";
import {TrustDomain} from "./trustDomain/TrustDomain"
import 'antd/dist/reset.css';
import './App.css';

const {Content, Footer} = Layout;

const App = () => {

    return (

        <Provider store={store}>
            <ConfigProvider theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    fontFamily: 'Avenir Next, serif',
                },
            }}>
                <Layout style={{minHeight: '100vh'}}>
                    <Router>
                        <SideMenu/>
                        <Layout>
                            <AppHeader/>
                            <Content style={{margin: '10px 10px 10px'}}>
                                <Routes>
                                    <Route path="/" element={<Dashboard/>}/>
                                    <Route path="dashboard" element={<Dashboard/>}/>
                                    <Route path="trustdomain">
                                        <Route path="list" element={<TrustDomain/>}/>
                                    </Route>
                                    <Route path="settings">
                                        <Route path="list" element={<Settings/>}/>
                                    </Route>
                                </Routes>
                            </Content>
                            <Footer/>
                        </Layout>
                    </Router>
                </Layout>
            </ConfigProvider>
        </Provider>
    )
}

export default App;