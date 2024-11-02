// src/components/form/SMSelect.tsx
import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
import { TSelect as TSMSelect } from "../../types";

const SMSelect = ({
  name,
  label,
  options,
  required = true,
  disabled,
  mode,
}: TSMSelect) => {
  return (
    <Controller
      name={name}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item required={required} label={label}>
          <Select
            {...field}
            disabled={disabled}
            options={options}
            size="large"
            id={name}
            mode={mode}
          />
          {error && (
            <span className="text-red-500">
              {error.message || "Please select a valid option"}
            </span>
          )}
        </Form.Item>
      )}
    />
  );
};

export default SMSelect;
