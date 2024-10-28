import MyInventory from "../pages/user/myInventory";
import CreateSmartPhone from "../pages/user/smartphone/createSmartPhone";

export const userPath = [
  {
    name: "my-inventory",
    path: "my-inventory",
    element: <MyInventory />,
  },
  {
    name: "smartphone manage",
    chilren: [
      {
        name: "create-smartphone",
        path: "create-smartphone",
        element: <CreateSmartPhone />,
      },
    ],
  },
];
