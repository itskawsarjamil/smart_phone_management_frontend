import AllSmartPhone from "../pages/shared/allSmartPhones";
import ChangePassword from "../pages/shared/auth/changePassword";
import ForgetPassword from "../pages/shared/auth/forgetPassword";
import MyDetails from "../pages/shared/auth/myDetails";
import ResetPassword from "../pages/shared/auth/resetPassword";
import SellsDetails from "../pages/shared/sellsHistory/sellsDetails";
import SmartPhoneDetails from "../pages/shared/smartPhone/smartPhoneDetails";
import UpdateUser from "../pages/shared/updateUser";

export const sharedPath = [
  {
    path: "update-user/:userId",
    element: <UpdateUser />,
  },
  {
    name: "all-smartPhones",
    path: "all-smartPhones",
    element: <AllSmartPhone />,
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
        path: "smartphone-details/:phoneId",
        element: <SmartPhoneDetails />,
      },
      {
        path: "update-smartphone/:phoneId",
        element: <AllSmartPhone />,
      },
    ],
  },
];
