import { Stack, Box, Typography, Divider } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import ButtonPage from "./pages/ButtonPage";
import CommonButton from "./containers/button-component";
import React from "react";
import TextFieldPage from "./pages/TextFieldPage";
import FormPage from "./pages/FormPage";
import FetchPage from "./pages/FetchPage";

function App() {
  const navigate = useNavigate();
  return (
    <Box px={10} py={2}>
      <Typography variant="h3" my={3} color="grey.700" textAlign={"center"}>
        React Testing
      </Typography>
      <Stack direction={"row"} gap={3}>
        <CommonButton onClick={() => navigate("/")} color="primary">
          Home Page
        </CommonButton>
        <CommonButton onClick={() => navigate("/buttonPage")}>
          Button Page
        </CommonButton>
        <CommonButton onClick={() => navigate("/textfieldPage")}>
          TextField Page
        </CommonButton>
        <CommonButton onClick={() => navigate("/formPage")}>
          Form Page
        </CommonButton>
        <CommonButton onClick={() => navigate("/fetchPage")}>
          Fetch Page
        </CommonButton>
      </Stack>
      <Divider></Divider>
      {/* --------------------------------------------Routes-------------------------------------------------------- */}
      <Routes>
        <Route path="/buttonPage" element={<ButtonPage />} />
        <Route path="/textfieldPage" element={<TextFieldPage />} />
        <Route path="/formPage" element={<FormPage />} />
        <Route path="/fetchPage" element={<FetchPage />} />
      </Routes>
    </Box>
  );
}

export default App;
