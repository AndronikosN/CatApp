import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";


const Login1 = () => {
    const navigate = useNavigate();

    localStorage.setItem("logged",false);

    const handleEditing = () => {
        navigate('Cats');
    };
  
    const [credentials, setCredentials] = useState({
        username:"",
        password:""
    });
  
    const handleChange = (event) => {
      setCredentials({
        ...credentials,
        [event.target.name]: event.target.value
      })
      };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(credentials);
      localStorage.setItem("logged", true);
      handleEditing();
    };
  
  
    return (
      <div>

      <Header />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{  
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome to CatApp!
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={credentials.username}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={credentials.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Container>
      </div>
    );
  }

export default Login1