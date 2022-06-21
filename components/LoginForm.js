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

import Copyright from "./Copyright";
import axiosInstance from "../axios";

const theme = createTheme();

export default function LoginForm() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleLoginInfoChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosInstance
      .post("token/", {
        ...loginInfo,
      })
      .then((res) => {
        const accessToken = res.data.access;
        const refreshToken = res.data.refresh;
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        axiosInstance.defaults.headers.Authorization =
          "JWT " + localStorage.getItem("access_token");
        router.push("/");
      });
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
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleLogin}
            sx={{ mt: 3 }}
          >
            <TextField
              value={loginInfo.email}
              onChange={handleLoginInfoChange}
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={loginInfo.password}
              onChange={handleLoginInfoChange}
              required
              fullWidth
              type="password"
              label="Password"
              name="password"
              autoComplete="password"
              sx={{ mt: 3 }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember Me"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup">
                  <a>Don't have an account? Sign Up</a>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
