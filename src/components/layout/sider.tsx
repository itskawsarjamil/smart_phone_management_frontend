import { Layout, Menu, MenuProps } from "antd";
import useBreakPoint from "antd/lib/grid/hooks/useBreakpoint";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/svg/icon.svg";
import { ROLE } from "../../constant";
import adminPath from "../../routes/adminpath.routes";
import { sharedPath } from "../../routes/sharedpath.routes";
import { userPath } from "../../routes/userpath.routes";
import "../../styles/siderIcon.style.css";
import { sideBarItemGenerator } from "../../utils/sidebarItemGenerator";
const Sider = ({
  role,
  setRole,
}: {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const screens = useBreakPoint();
  const { Sider } = Layout;

  let items: MenuProps["items"] = [];
  switch (role) {
    case ROLE.admin:
      items = sideBarItemGenerator(adminPath, sharedPath, ROLE.admin);
      break;
    case ROLE.user:
      items = sideBarItemGenerator(userPath, sharedPath, ROLE.user);
      break;

    default:
      break;
  }
  // const items = [
  //   {
  //     key: "Auth Management",
  //     label: "Auth Management",
  //     children: [
  //       {
  //         key: "change-password",
  //         label: <Link to={"/change-password"}>change-password</Link>,
  //       },
  //       {
  //         key: "forget-password",
  //         label: <Link to={"/forget-password"}>forget-password</Link>,
  //       },
  //     ],
  //   },
  //   {
  //     key: "User Management",
  //     label: "User Management",
  //     children: [
  //       {
  //         key: "create-user",
  //         label: <Link to={"/create-user"}>create-user</Link>,
  //       },
  //       {
  //         key: "get-all-user",
  //         label: <Link to={"/get-all-user"}>get-all-user</Link>,
  //       },
  //       {
  //         key: "get-single-user",
  //         label: <Link to={"/get-single-user"}>get-single-user</Link>,
  //       },
  //       {
  //         key: "get-all-user",
  //         label: <Link to={"/get-all-user"}>get-all-user</Link>,
  //       },
  //       {
  //         key: "get-all-user",
  //         label: <Link to={"/get-all-user"}>get-all-user</Link>,
  //       },
  //     ],
  //   },
  //   {
  //     key: "SmartPhone Management",
  //     label: "SmartPhone Management",
  //   },
  //   {
  //     key: "Sales History",
  //     label: "Sales History",
  //   },
  // ];
  const navigate = useNavigate();
  return (
    <Sider
      breakpoint="lg"
      // collapsedWidth="40"
      // onBreakpoint={(broken) => {
      //   console.log(broken);
      // }}
      // onCollapse={(collapsed, type) => {
      //   console.log(collapsed, type);
      // }}

      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
      }}
    >
      {/* //* logo section */}
      <div
        style={{
          width: "100%",
          height: screens.lg ? "8%" : "6%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <img
          onClick={() => {
            console.log("hello");
            return navigate("/");
          }}
          className="zoom"
          src={icon}
          alt=""
          style={{
            width: screens.lg ? "50%" : "100%",

            height: "auto",
            borderRadius: "1em",
            // padding: screens.lg ? ".3em" : ".3em",
          }}
        />
      </div>
      {/* //* logo section end */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        style={{
          fontSize: "0.8rem",
          fontWeight: "bold",
          marginTop: "1rem",
        }}
      />
    </Sider>
  );
};

export default Sider;
