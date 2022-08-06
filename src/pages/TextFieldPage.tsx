import React from "react";
import { Stack, Box, Typography, Divider } from "@mui/material";
import CommonTextField from "../containers/textfield-component/CommonTextField";

function TextFieldPage() {
  return (
    <Box m={10}>
      <CommonTextField
        label="Name"
        name="Select your name"
        placeholder="Select your name"
      />
    </Box>
  );
}

export default TextFieldPage;
