import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import {
  Avatar,
  TextField,
  CssBaseline,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import axiosInstance from "../axios";
import Copyright from "./Copyright";

const theme = createTheme();

export default function SignupForm() {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    number: "",
  });

  const handelDetailChange = (e) => {
    setUserDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitDetails = (e) => {
    e.preventDefault();
    axiosInstance
      .post("user/signup/", {
        ...userDetails,
      })
      .then((res) => {
        if (res.status === 201) {
          router.push("/login");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography variant="h5" component="h1">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={submitDetails}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  value={userDetails.first_name}
                  onChange={handelDetailChange}
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  value={userDetails.last_name}
                  onChange={handelDetailChange}
                  name="last_name"
                  required
                  fullWidth
                  label="Last Name"
                  autoComplete="last name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  value={userDetails.email}
                  onChange={handelDetailChange}
                  name="email"
                  required
                  fullWidth
                  label="Email"
                  autoComplete="email@domain.com"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  value={userDetails.username}
                  onChange={handelDetailChange}
                  name="username"
                  required
                  fullWidth
                  label="Username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  value={userDetails.password}
                  onChange={handelDetailChange}
                  name="password"
                  required
                  fullWidth
                  label="Password"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  value={userDetails.confirm_password}
                  onChange={handelDetailChange}
                  name="confirm_password"
                  required
                  fullWidth
                  label="Confirm Password"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  value={userDetails.number}
                  onChange={handelDetailChange}
                  name="number"
                  fullWidth
                  label="Mobile Number"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: 2, mt: 3 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login">
                  <a>Already have an account? Sign in</a>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
