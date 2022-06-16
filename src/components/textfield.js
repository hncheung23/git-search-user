import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextFields(props) {
  const { type = "text" } = props;
  return <TextField variant="standard" {...props} type={type} />;
}
