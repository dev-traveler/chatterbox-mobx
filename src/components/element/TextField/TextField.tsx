import React from "react";
import MuiTextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material/TextField/TextField";

function TextField(props: TextFieldProps) {
  return <MuiTextField {...props} />;
}

export default TextField;
