import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextAreaAutoSize from "@mui/material/TextareaAutosize";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Copyright from "../../components/Copyright";

const theme = createTheme();

export default function CreatePost() {
  const [status, setStatus] = React.useState("publish");

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
            Create Post
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  label="title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Category"
                  name="category"
                />
              </Grid>
              <Grid item xs={12}>
                <TextAreaAutoSize
                  required
                  fullWidth
                  minRows={2}
                  label="Excerpt"
                  name="excerpt"
                />
              </Grid>
              <Grid item xs={12}>
                <TextAreaAutoSize
                  required
                  fullWidth
                  name="content"
                  label="Content"
                  minRows={2}
                />
              </Grid>

              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={status}
                  label="status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value={"publish"}>Publish</MenuItem>
                  <MenuItem value={"draft"}>Draft</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
