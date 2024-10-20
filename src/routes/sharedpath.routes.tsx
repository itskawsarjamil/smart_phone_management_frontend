import ChangePassword from "../pages/shared/auth/changePassword";
import ForgetPassword from "../pages/shared/auth/forgetPassword";
import MyDetails from "../pages/shared/auth/myDetails";
import ResetPassword from "../pages/shared/auth/resetPassword";
import SellsDetails from "../pages/shared/sellsHistory/sellsDetails";
import UpdateUser from "../pages/shared/updateUser";
import AllSmartPhone from "../pages/smartPhone/allSmartPhones";
import CreateSmartPhone from "../pages/smartPhone/createSmartPhone";
import SmartPhoneDetails from "../pages/smartPhone/smartPhoneDetails";

export const sharedPath = [
  {
    name: "update-user",
    path: "update-user",
    element: <UpdateUser />,
  },
  {
    name: "auth",

    children: [
      {
        name: "my-details",
        path: "my-details",
        element: <MyDetails />,
      },
      {
        name: "change-password",
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        name: "forget-password",
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        name: "reset-password",
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    name: "sell history",
    // path:""
    children: [
      {
        name: "sells-details",
        path: "sells-details",
        element: <SellsDetails />,
      },
    ],
  },
  {
    name: "Smart Phone",
    children: [
      {
        name: "all-smartphone",
        path: "all-smartphone",
        element: <AllSmartPhone />,
      },
      {
        name: "create-smartphone",
        path: "create-smartphone",
        element: <CreateSmartPhone />,
      },
      {
        name: "smartphone-details",
        path: "smartphone-details",
        element: <SmartPhoneDetails />,
      },
      {
        name: "update-smartphone",
        path: "update-smartphone",
        element: <AllSmartPhone />,
      },
    ],
  },
];
