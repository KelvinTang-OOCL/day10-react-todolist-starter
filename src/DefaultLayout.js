import {NavLink, Outlet} from "react-router";
import {Layout, Menu} from "antd";
import {HomeOutlined, InfoCircleOutlined, ScheduleOutlined} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

export function DefaultLayout() {
    const menuItems = [
        {
            key: 'home',
            label: <NavLink to="/">Home</NavLink>,
            icon: <HomeOutlined />
        },
        {
            key: 'todos',
            label: <NavLink to="/todos">TODO</NavLink>,
            icon: <ScheduleOutlined />
        },
        {
            key: 'about',
            label: <NavLink to="/about">About</NavLink>,
            icon: <InfoCircleOutlined />
        },
    ];

    return (
        <Layout>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" items={menuItems} />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ padding: 24, minHeight: 280 }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Footer copyright
            </Footer>
        </Layout>
    );
}