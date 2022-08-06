import React from "react";
import { Stack, Box, Typography, Divider } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CommonButton from "../containers/button-component";

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h3" my={3} color="grey.700">
        React Testing
      </Typography>
      <Stack direction={"row"}>
        <CommonButton onClick={() => navigate("/buttonPage")}>
          Button Page
        </CommonButton>
      </Stack>
      <Divider></Divider>
    </>
  );
}

export default Layout;
