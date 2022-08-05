import { TextField, Stack, Container, Paper, Button } from "@mui/material";
import React, { useState } from "react";

function Index() {
  const [name, setName] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "80vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Paper elevation={2} sx={{ p: 4, minWidth: "400px" }}>
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextField
              name="name"
              label="name"
              // value={name}
              inputProps={{ "data-testid": "name-field" }}
              // onChange={(e) => setName(e.target.value)}
            />
            <TextField name="email" label="email" />
            <TextField name="password" label="password" />
          </Stack>
          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Index;
