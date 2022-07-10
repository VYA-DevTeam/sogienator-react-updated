import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import './FeedbackForm.css';
import { Container } from '@mui/material';
export function FeedbackForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <select {...register("accuracy")}>
          <option value="">Trải nghiệm của bạn</option>
          <option value="1">Không chính xác</option>
          <option value="2">Gần chính xác</option>
          <option value="3">Chính xác</option>
          <option value="4">Có kết quả nhưng cảm thấy không giống với bản thân</option>
          <option value="5">Có kết quả và cảm thấy giống với bản thân</option>
        </select>
        <select {...register("age")}>
          <option value="">Tuổi của bạn</option>
          <option value="1">Dưới 15</option>
          <option value="2">Trong độ tuổi từ 15 đến 20</option>
          <option value="3">Trong độ tuổi từ 21 đến 30</option>
          <option value="4">Trên 30</option>
        </select>
        <textarea {...register("additional")} placeholder="Bạn còn điều gì muốn bày tỏ hoặc góp ý chi tiết thêm với Vy An không?" />
        <p>{data}</p>
        <input type="submit" />
      </form>
    </Container>
  );
}
export default FeedbackForm;