import { Button, Paper, Typography } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputDropdown } from "./form-components/FormInputDropdown";

interface IFormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};
export const FeedbackForm = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, control, setValue, watch } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h6"> Form Feedback </Typography>

      

      <FormInputDropdown
        name="dropdownValue"
        control={control}
        label="trải nghiệm về kết quả"
      />
      <p>Bạn còn điều gì muốn bày tỏ hoặc góp ý chi tiết thêm với Vy An không?</p>
      <FormInputText name="textValue" control={control} label="Câu trả lời của bạn" />
      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {" "}
        Submit{" "}
      </Button>
      
    </Paper>
  );
};

export default FeedbackForm;
