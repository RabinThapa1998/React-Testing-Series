import { Stack, Box, Typography, Divider } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import ButtonPage from "./pages/ButtonPage";
import CommonButton from "./containers/button-component";

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
      </Stack>
      <Divider></Divider>
      <Routes>
        <Route path="/buttonPage" element={<ButtonPage />} />
      </Routes>
    </Box>
  );
}

export default App;
