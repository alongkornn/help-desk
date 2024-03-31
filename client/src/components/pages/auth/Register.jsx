import React, { useState } from 'react'
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'
export const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        await axios.post('http://localhost:3000/register/admin/', form)
          .then((res) => {
            navigate('/show-ticket-admin');  
          })
          .catch((err) => console.log(err));
          
      }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

  return (
      <div>
          <h1>Register Form</h1>
          <form>
            <div>
                <TextField
                    onChange={(e) => handleChange(e)}
                    id="outlined-basic"
                    label="FirstName"
                    variant="outlined"
                    name='fname'
                    type='text'
                />
            </div>
              <br />
            <div>
                <TextField
                    onChange={(e) => handleChange(e)}
                    id="outlined-basic"
                    label="LastName"
                    variant="outlined"
                    name='lname'
                    type='text'
                    />
            </div> 
              <br />
            <div>
                <TextField
                    onChange={(e) => handleChange(e)}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name='email'
                    type='text'
                />
            </div>
              <br />
            <div>
                <TextField
                    onChange={(e) => handleChange(e)}
                    id="outlined-basic"
                    label="password"
                    variant="outlined"
                    name='password'
                    type='password'
                />
            </div>
              <br />
              <Button onClick={e => handleSubmit(e)} >Register</Button>
        </form>
    </div>
  )
}

