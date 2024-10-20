import { Button, Layout, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import Sider from "./sider";
import { useState } from "react";

const MainLayout = () => {
  const { Header, Content, Footer } = Layout;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [user, setUser] = useState(false);
  const handleLogOut = () => setUser((prev) => !prev);
  const location = useLocation();
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header
          style={{
            paddingRight: 10,

            background: "black",
            textAlign: "end",
          }}
        >
          {user ? (
            <>
              <Link to={"/login"}>
                <Button onClick={handleLogOut}>Login</Button>
              </Link>
              <Link to={"/register"}>
                <Button onClick={handleLogOut}>register</Button>
              </Link>
            </>
          ) : (
            <Button onClick={handleLogOut}>Log Out</Button>
          )}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "fit-content",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©{new Date().getFullYear()} Created by{" "}
          <Link to={`https://www.linkedin.com/in/itskawsarjamil/`}>
            Kawsar Jamil
          </Link>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
