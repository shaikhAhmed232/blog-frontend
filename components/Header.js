import * as React from "react";

import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axiosInstance from "../axios";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eceff1",
    },
  },
});

export default function Header() {
  const token =
    typeof window === "undefined"
      ? null
      : localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : null;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Blog
            </Typography>
            {token === null ? (
              <>
                <Link href="/login">
                  <a
                    style={{
                      padding: "0.5rem 1.5rem",
                      marginRight: "0.5rem",
                      border: "2px solid blue",
                      borderRadius: "3px",
                    }}
                  >
                    Login
                  </a>
                </Link>
                <Link href="/signup">
                  <a
                    style={{
                      padding: "0.5rem 1.5rem",
                      marginRight: "0.5rem",
                      border: "2px solid blue",
                      borderRadius: "3px",
                    }}
                  >
                    Signup
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/create-post">
                  <a
                    style={{
                      padding: "0.5rem 1.5rem",
                      marginRight: "0.5rem",
                      border: "2px solid blue",
                      borderRadius: "3px",
                    }}
                  >
                    Create Post
                  </a>
                </Link>
                <Link href="/logout">
                  <a
                    style={{
                      padding: "0.5rem 1.5rem",
                      marginRight: "0.5rem",
                      border: "2px solid blue",
                      borderRadius: "3px",
                    }}
                  >
                    Logout
                  </a>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
