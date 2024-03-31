import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FormTicket.css";

export const FormTicket = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    typeProblem: "",
    description: "",
    position: "",
    name: ""
  });
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (
      form.description != null &&
      form.name != null &&
      form.position != null &&
      form.typeProblem != null
    ) {
      await axios
        .post("http://localhost:3000/ticket", form)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
      setInputValue("");
      setError(false);
    } else {
      setError(true);
      alert("Please enter a value before submitting.");
    }
  };
  return (
    <section className="content text-center mt-5">
      <div className="container-fluid">
        <form>
          <div>
            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              id="outlined-basic"
              label="ประเภทปัญหา"
              variant="outlined"
              name="typeProblem"
              type="text"
              required
            />
          </div>
          <br />
          <div>
            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              id="outlined-basic"
              label="รายละเอียด"
              variant="outlined"
              name="description"
              required
              type="text"
            />
          </div>
          <br />
          <div>
            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              id="outlined-basic"
              label="ตำแหน่ง"
              variant="outlined"
              name="position"
              required
              type="text"
            />
          </div>
          <br />
          <div>
            <TextField
              onChange={(e) => {
                handleChange(e);
              }}
              id="outlined-basic"
              label="ชื่อผู้แจ้ง"
              variant="outlined"
              name="name"
              required
              type="text"
            />
          </div>
          <br />
          <Button
            onClick={(e) => handleSubmit(e)}
            variant="contained"
            color="primary"
          >
            แจ้ง
          </Button>
        </form>
      </div>
    </section>
  );
};
