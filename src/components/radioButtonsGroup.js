import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup(props) {
  const { name, buttons, defaultValue, className, label } = props;
  return (
    <FormControl className={className}>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup defaultValue={defaultValue} name={name}>
        {buttons.map((button, index) => (
          <FormControlLabel
            key={index}
            value={button.value}
            control={<Radio />}
            label={button.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
