import {
  TextField,
  Stack,
  Container,
  Paper,
  Button,
  TextFieldProps,
  OutlinedInput,
  InputLabel,
  InputLabelProps,
  OutlinedInputProps,
  Box,
  Typography,
} from "@mui/material";
import React from "react";

interface CustomTextFieldProps extends OutlinedInputProps {
  label: string;
  name: string;
  placeholder: string;
}

function index(props: CustomTextFieldProps) {
  const { name, label, placeholder, ...rest } = props;
  return (
    <Box>
      <InputLabel htmlFor={name}>
        <Typography textAlign="start">{label}</Typography>
      </InputLabel>
      <OutlinedInput id={name} placeholder={placeholder} fullWidth {...rest} />
    </Box>
  );
}

export default index;
