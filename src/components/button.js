import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons(props) {
  const { label } = props;
  return <Button {...props}>{label}</Button>;
}
