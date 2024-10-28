import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";
import SMForm from "../components/form/SMForm";
import SMInput from "../components/form/SMInput";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";
import { useNavigate } from "react-router-dom";

const Login = () => {
  useDocumentTitle("login");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const onSubmit = async (e: FieldValues) => {
    console.log(e);
    const toastId = toast.loading("logging...");
    try {
      const res = await login(e).unwrap();
      // console.log(res);
      const user = verifyToken(res?.data?.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });

      // if (res.data.needsPasswordChange) {
      //   navigate(`/change-password`);
      // } else {
      // }
      navigate(`/${user.role}/all-smartPhones`);
    } catch (e) {
      toast.error("login failed", { id: toastId, duration: 2000 });
    }
  };

  const defaultValues = {
    identifier: "U-001",
    password: "defaultpass123",
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <Col span={12}>
        <SMForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <SMInput name="identifier" label="Email or UserName" />
          <SMInput name="password" label="password" />

          <Button htmlType="submit">Submit</Button>
        </SMForm>
      </Col>
    </Row>
  );
};

export default Login;
