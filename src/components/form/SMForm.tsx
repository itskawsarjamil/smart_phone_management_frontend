import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const SMForm = ({
  onSubmit,
  defaultValues,
  children,
}: {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  defaultValues?: Record<string, unknown>;
}) => {
  const methods = useForm({ defaultValues });
  const submit: SubmitHandler<FieldValues> = (e) => {
    onSubmit(e);
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default SMForm;
