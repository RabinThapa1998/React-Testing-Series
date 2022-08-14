import {
  TextField,
  Stack,
  Container,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CommonButton from "../button-component";
import CommonTextField from "../textfield-component/CommonTextField";
import CoreInputField from "../textfield-component/core-input-field";
function Index() {
  const [value, setValue] = useState({ name: "", email: "", password: "" });
  const [submit, setSubmit] = useState<any>({});
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmit(value);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        // minHeight: "80vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Stack>
        <Typography data-testid="name-typo">Name:{value.name}</Typography>
        <Typography>Email:{value.email}</Typography>
        <Typography>Password:{value.password}</Typography>
      </Stack>
      <Paper elevation={2} sx={{ p: 4, minWidth: "400px" }}>
        <form onSubmit={handleSubmit}>
          <Stack gap={2}>
            <CommonTextField
              name="name"
              label="Name"
              inputProps={{ "data-testid": "name-field" }}
              placeholder="enter your name"
              onChange={(e: any) =>
                setValue({ ...value, name: e.target.value })
              }
            />
            <TextField
              name="email"
              label="email"
              onChange={(e: any) =>
                setValue({ ...value, email: e.target.value })
              }
            />
            <TextField
              name="password"
              label="password"
              onChange={(e: any) =>
                setValue({ ...value, password: e.target.value })
              }
            />
            {/* <CoreInputField /> */}
            <CommonButton type="submit" variant="contained">
              Submit
            </CommonButton>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default Index;
