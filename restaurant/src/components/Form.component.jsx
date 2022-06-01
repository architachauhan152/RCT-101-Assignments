import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import {fetchData} from "../pages/Home"
const Inputdiv = styled.div`
  background-color: white;
  width: 20vw;
  padding: 20px;
  height: 100vh;
`;

const Form = styled.form``;
const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  font-size: 18px;
  padding: 5px;
`;
const Select = styled.select`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  font-size: 15px;
  padding: 5px 0;
`;
const Option = styled.option``;

const Button = styled.button``;
const FormContainer = () => {
  const [form, setForm] = useState({
    restaurent_name: "",
    picture_url: "",
    cost: "",
    payment_method: "",
    vote: "",
    review: "",
    rating: "",
    category: "",
  });
  
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const postData = async (e) => {
    e.preventDefault()
    try {
      let data = await axios.post("http://localhost:8080/data", form );
      fetchData()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Inputdiv>
      <Form onSubmit={postData}>
        <Input
          onChange={(e) => handleInput(e)}
          name="restaurent_name"
          type={"text"}
          placeholder="restaurent name"
        />
        <Input
          onChange={(e) => handleInput(e)}
          name="picture_url"
          type={"text"}
          placeholder="picture url"
        />
        <Input
          onChange={(e) => handleInput(e)}
          name="cost"
          type={"number"}
          placeholder="cost for one item"
        />
        <Select
          onChange={handleInput}
          name="payment_method"
          id="payment_method"
          value={"payment_method"}
        >
          <Option value="">payment method</Option>
          <Option value="online">Online</Option>
          <Option value="cash">Cash</Option>
        </Select>
        <Input
          onChange={(e) => handleInput(e)}
          name="vote"
          type={"number"}
          placeholder="total votes"
        />
        <Input
          onChange={(e) => handleInput(e)}
          name="review"
          type={"number"}
          placeholder="review"
        />
        <Select
          onChange={handleInput}
          name="rating"
          id="rating"
          value={"rating"}
        >
          <Option value="" defaultValue>
            select rating
          </Option>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="3.5">3.5</Option>
          <Option value="3.7">3.7</Option>
          <Option value="4">4</Option>
          <Option value="4.3">4.3</Option>
          <Option value="5">5</Option>
        </Select>
        <Select
          onChange={handleInput}
          name="category"
          id="category"
          value={"category"}
        >
          <Option value="">Select category</Option>
          <Option value="Asian">Asian</Option>
          <Option value="Italian">Italian</Option>
          <Option value="American">American</Option>
          <Option value="Indian">Indian</Option>
          <Option value="Chinease">Chinease</Option>
        </Select>
        <Input type="submit" />
      </Form>
    </Inputdiv>
  );
};

export default FormContainer;
