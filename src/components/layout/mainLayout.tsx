import { Button, Layout, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import Sider from "./sider";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getCurrentUser, logOut } from "../../redux/features/auth/authSlice";

const MainLayout = () => {
  const { Header, Content, Footer } = Layout;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const user = useAppSelector(getCurrentUser);

  const dispatch = useAppDispatch();
  const [role, setRole] = useState("user");
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const location = useLocation();
  return (
    <Layout>
      <Sider role={role} setRole={setRole} />
      <Layout>
        <Header
          style={{
            paddingRight: 10,

            background: "black",
            textAlign: "end",
          }}
        >
          {user === null ? (
            <>
              <Link to={"/login"}>
                <Button>Login</Button>
              </Link>
              <Link to={"/register"}>
                <Button>register</Button>
              </Link>
            </>
          ) : (
            <Button onClick={handleLogOut}>Log Out</Button>
          )}
          <Button
            onClick={() => {
              return setRole((prev) => (prev === "user" ? "admin" : "user"));
            }}
          >
            change from {role}
          </Button>
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
