import { Button, Row } from "antd";
import SMInput from "../components/form/SMInput";
import SMForm from "../components/form/SMForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  //   const [changePassword] = useChangePasswordMutation();
  //   const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);

    // const res = (await changePassword(data)) as TResponse<any>;
    // console.log(res?.data?.success);
    // if (res?.data?.success) {
    //   dispatch(logout());
    // }
    console.log(data);
    navigate("/login");
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <SMForm onSubmit={onSubmit}>
        <SMInput type="text" name="oldPassword" label="Old Password" />
        <SMInput type="text" name="newPassword" label="New Password" />
        <Button htmlType="submit">Login</Button>
      </SMForm>
    </Row>
  );
};

export default ChangePassword;
