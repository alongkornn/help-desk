import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export const UpdateFormTicket = () => {
  const [data, setData] = useState({
    typeProblem: "",
    description: "",
    position: "",
    name: "",
    status: ""
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    load(params.id);
  }, []);

  const load = async (id) => {
    await axios
      .get("http://localhost:3000/ticket/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .put("http://localhost:3000/ticket/" + params.id, data)
      .then((res) => {
        navigate("/show-detail-ticket");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section className="content text-center mt-5">
        <div className="container-fluid">
          <h2>Edit Form</h2>
          <form>
            <div>
              <TextField
                className="mt-3"
                onChange={(e) => {
                  handleChange(e);
                }}
                id="outlined-basic"
                label="ประเภทปัญหา"
                variant="outlined"
                name="typeProblem"
                type="text"
                value={data.typeProblem}
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
                type="text"
                value={data.description}
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
                type="text"
                value={data.position}
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
                type="text"
                value={data.name}
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
    </div>
  );
};
