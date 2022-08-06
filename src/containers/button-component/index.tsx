import {
  TextField,
  Stack,
  Container,
  Paper,
  Button,
  ButtonProps,
} from "@mui/material";

import React from "react";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode | string;
}
function index(props: CustomButtonProps) {
  const { children, ...rest } = props;
  return (
    <Button variant="contained" color="success" disableElevation {...rest}>
      {children}
    </Button>
  );
}

export default index;
