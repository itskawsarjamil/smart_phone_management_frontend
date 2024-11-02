import { Form } from "antd";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { TFormConfig, TFormProps, TSMForm } from "../../types";

const SMForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
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
// const SMForm = <T extends FieldValues>({
//   onSubmit,
//   children,
//   defaultValues,
//   resolver,
// }: TFormPropsWithGeneric<T>) => {
//   const formConfig: TFormConfigWithGeneric<T> = {};
//   if (defaultValues) {
//     formConfig["defaultValues"] = defaultValues;
//   }
//   if (resolver) {
//     formConfig["resolver"] = resolver;
//   }
//   const methods = useForm<T>(formConfig);
//   const submit: SubmitHandler<T> = (e) => {
//     onSubmit(e);
//     methods.reset();
//   };
//   return (
//     <FormProvider {...methods}>
//       <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
//         {children}
//       </Form>
//     </FormProvider>
//   );
// };

export default SMForm;
