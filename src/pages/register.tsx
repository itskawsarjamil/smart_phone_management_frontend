import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Form, Input, Row } from "antd";
import { ReactNode } from "react";
import {
  Controller,
  FieldValues,
  Resolver,
  SubmitHandler,
} from "react-hook-form";
import { z } from "zod";
import SMForm from "../components/form/SMForm";
import SMInput from "../components/form/SMInput";
import SMSelect from "../components/form/SMSelect";
import { bloodGroupOptions } from "../constant";

import { createUserValidationSchema } from "../schema/CreateUserValidation";
import { toast } from "sonner";
import { useRegisterMutation } from "../redux/features/user/userApi";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  type TUserCreateValues = z.infer<typeof createUserValidationSchema>;
  const [addUser] = useRegisterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    const { image, ...userData } = data;
    const isDefaultPass = userData?.password === "defaultPass123";
    if (isDefaultPass) {
      delete userData?.password;
    }
    formData.append("data", JSON.stringify(userData));
    formData.append("file", image);
    const toastId = toast.loading("Registering...");
    try {
      const res = await addUser(formData).unwrap();
      console.log(res);

      toast.success("Registration Successfull", {
        id: toastId,
        duration: 2000,
      });

      if (res.data?.needPasswordChange) {
        toast.warning(
          "your Pass become DefaultPassword. pass: defaultpass123\n.change right now",
          {
            id: toastId,
            duration: 5000,
          }
        );
        navigate("/change-password");
      } else {
        navigate("/login");
      }
    } catch (er) {
      toast.error("Registration Failed", { id: toastId, duration: 2000 });
    }

    // console.log(data);
    // console.log(userData);
    // console.log(Object.fromEntries(formData));
  };

  // const defualtDummyUserValue: TUserCreateValues = {
  //   name: {
  //     firstName: "John",
  //     lastName: "Doe",
  //   },
  //   userName: "john_doe",
  //   email: "john.doe@example.com",
  //   bio: "Software developer with a passion for building impactful projects.",
  //   contactNo: "01234199444",
  //   emergencyContactNo: "01234119933",
  //   bloodGroup: "O+",
  //   presentAddress: "1234 Elm Street, Citytown",
  //   permanentAddress: "5678 Oak Street, Villagetown",
  // };
  const resolver: Resolver<TUserCreateValues, any> = zodResolver(
    createUserValidationSchema
  );
  // const resolver: any = zodResolver(createUserValidationSchema);
  const formChild = [
    <SMInput label="First Name" name="name.firstName" type="text" />,
    <SMInput label="Last Name" name="name.lastName" type="text" />,
    <SMInput label="Username" name="userName" type="text" />,
    <SMInput
      label="Password"
      name="password"
      type="text"
      defaultValue="defaultPass123"
      required={false}
    />,
    <SMInput label="Email" name="email" type="email" />,
    <SMInput label="Bio" name="bio" type="text" />,
    <SMInput label="Contact No" name="contactNo" type="text" />,
    <SMInput
      label="Emergency Contact No"
      name="emergencyContactNo"
      type="text"
    />,
    <SMSelect
      label="Blood Group"
      name="bloodGroup"
      options={bloodGroupOptions}
      required={true}
    />,
    <SMInput label="Present Address" name="presentAddress" type="text" />,
    <SMInput label="Permanent Address" name="permanentAddress" type="text" />,
    <Controller
      name="image"
      render={({ field: { onChange, value, ...field } }) => (
        <Form.Item label="Picture">
          <Input
            type="file"
            value={value?.fileName}
            {...field}
            onChange={(e) => {
              return onChange(e.target.files?.[0]);
            }}
          />
        </Form.Item>
      )}
    />,
  ];
  return (
    <Row justify={"center"} style={{ height: "100vh" }} align={"middle"}>
      <Col span={22}>
        <SMForm onSubmit={onSubmit} resolver={resolver}>
          <Row gutter={[24, 36]}>
            {formChild.map((item, index) => (
              <Col
                key={index.toString()}
                span={24}
                md={{ span: 12 }}
                lg={{ span: 6 }}
              >
                {item as ReactNode}
              </Col>
            ))}
          </Row>
          <Row justify={"center"} align={"middle"} gutter={20}>
            <Button htmlType="submit">Submit</Button>,
          </Row>
        </SMForm>
      </Col>
    </Row>
  );
};

export default Register;
