import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TInput = {
  name: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
};
const SMInput = ({ name, label, type, disabled, required = true }: TInput) => {
  return (
    <Controller
      name={name}
      rules={{ required }}
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
