const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserValidationSchema),
  });

  // Function to handle form submission
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      {/* Name fields */}
      <Form.Item
        label="First Name"
        validateStatus={errors.name?.firstName ? "error" : ""}
        help={errors.name?.firstName?.message}
      >
        <Input
          {...register("name.firstName")}
          placeholder="Enter your first name"
        />
      </Form.Item>

      <Form.Item
        label="Middle Name"
        validateStatus={errors.name?.middleName ? "error" : ""}
        help={errors.name?.middleName?.message}
      >
        <Input
          {...register("name.middleName")}
          placeholder="Enter your middle name (optional)"
        />
      </Form.Item>

      <Form.Item
        label="Last Name"
        validateStatus={errors.name?.lastName ? "error" : ""}
        help={errors.name?.lastName?.message}
      >
        <Input
          {...register("name.lastName")}
          placeholder="Enter your last name"
        />
      </Form.Item>

      {/* Username */}
      <Form.Item
        label="Username"
        validateStatus={errors.userName ? "error" : ""}
        help={errors.userName?.message}
      >
        <Input {...register("userName")} placeholder="Enter your username" />
      </Form.Item>

      {/* Email */}
      <Form.Item
        label="Email"
        validateStatus={errors.email ? "error" : ""}
        help={errors.email?.message}
      >
        <Input {...register("email")} placeholder="Enter your email" />
      </Form.Item>

      {/* Bio */}
      <Form.Item
        label="Bio"
        validateStatus={errors.bio ? "error" : ""}
        help={errors.bio?.message}
      >
        <Input.TextArea {...register("bio")} placeholder="Enter your bio" />
      </Form.Item>

      {/* Profile Image URL */}
      <Form.Item
        label="Profile Image URL"
        validateStatus={errors.profileImg ? "error" : ""}
        help={errors.profileImg?.message}
      >
        <Input
          {...register("profileImg")}
          placeholder="Enter profile image URL (optional)"
        />
      </Form.Item>

      {/* Password */}
      <Form.Item
        label="Password"
        validateStatus={errors.password ? "error" : ""}
        help={errors.password?.message}
      >
        <Input.Password
          {...register("password")}
          placeholder="Enter your password"
        />
      </Form.Item>

      {/* Contact Number */}
      <Form.Item
        label="Contact Number"
        validateStatus={errors.contactNo ? "error" : ""}
        help={errors.contactNo?.message}
      >
        <Input
          {...register("contactNo")}
          placeholder="Enter your contact number (e.g., 01234567890)"
        />
      </Form.Item>

      {/* Emergency Contact Number */}
      <Form.Item
        label="Emergency Contact Number"
        validateStatus={errors.emergencyContactNo ? "error" : ""}
        help={errors.emergencyContactNo?.message}
      >
        <Input
          {...register("emergencyContactNo")}
          placeholder="Enter emergency contact number (e.g., 01234567890)"
        />
      </Form.Item>

      {/* Blood Group */}
      <Form.Item
        label="Blood Group"
        validateStatus={errors.bloodGroup ? "error" : ""}
        help={errors.bloodGroup?.message}
      >
        <Select
          {...register("bloodGroup")}
          placeholder="Select your blood group"
        >
          <Select.Option value="A+">A+</Select.Option>
          <Select.Option value="A-">A-</Select.Option>
          <Select.Option value="B+">B+</Select.Option>
          <Select.Option value="B-">B-</Select.Option>
          <Select.Option value="AB+">AB+</Select.Option>
          <Select.Option value="AB-">AB-</Select.Option>
          <Select.Option value="O+">O+</Select.Option>
          <Select.Option value="O-">O-</Select.Option>
        </Select>
      </Form.Item>

      {/* Present Address */}
      <Form.Item
        label="Present Address"
        validateStatus={errors.presentAddress ? "error" : ""}
        help={errors.presentAddress?.message}
      >
        <Input
          {...register("presentAddress")}
          placeholder="Enter your present address"
        />
      </Form.Item>

      {/* Permanent Address */}
      <Form.Item
        label="Permanent Address"
        validateStatus={errors.permanentAddress ? "error" : ""}
        help={errors.permanentAddress?.message}
      >
        <Input
          {...register("permanentAddress")}
          placeholder="Enter your permanent address"
        />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
