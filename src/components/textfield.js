import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextFields(props) {
  const { type = "text", ariaLabel = { "aria-label": "basic-text-input" } } =
    props;
  return (
    <TextField
      variant="standard"
      {...props}
      type={type}
      inputProps={ariaLabel}
    />
  );
}
