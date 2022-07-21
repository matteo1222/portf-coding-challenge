import React, { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";

interface NumberFilterProps {
  label: string;
  threshold: string;
  setThreshold: Dispatch<SetStateAction<string>>;
  helperText?: string;
}

function NumberFilter(props: NumberFilterProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const numberInput = event.target.value.replace(/[^0-9]/g, "");
    props.setThreshold(numberInput);
  }
  return (
    <TextField
      label={props.label}
      variant="outlined"
      value={props.threshold}
      onChange={handleChange}
      helperText={props.helperText}
    />
  );
}

export default NumberFilter;
