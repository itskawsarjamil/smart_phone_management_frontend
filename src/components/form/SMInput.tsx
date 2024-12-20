import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
import { TSMInput } from "../../types";

const SMInput = ({
  name,
  label,
  type,
  disabled,
  defaultValue,
  required = true,
}: TSMInput) => {
  return (
    <Controller
      name={name}
      rules={{ required }}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <Form.Item required={required} label={label}>
          <Input
            size="large"
            disabled={disabled}
            {...field}
            id={name}
            type={type}
          />
          {error && (
            <span className="text-red-500">
              {error.message || "please give valid input"}
            </span>
          )}
        </Form.Item>
      )}
    />
  );
};

export default SMInput;
