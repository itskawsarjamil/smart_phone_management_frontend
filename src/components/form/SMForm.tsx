import { Form } from "antd";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { TFormConfig, TSMForm } from "../../types";

const SMForm = <T extends FieldValues>({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TSMForm<T> & TFormConfig<T>) => {
  const formConfig: TFormConfig<T> = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm<T>(formConfig);
  const submit: SubmitHandler<T> = (e) => {
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
