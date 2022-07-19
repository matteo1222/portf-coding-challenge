import React from "react";
import TextField from "@mui/material/TextField";

interface NumberFilterProps {
  label: string;
}

function NumberFilter(props: NumberFilterProps) {
  return <TextField label={props.label} variant="outlined" />;
}

export default NumberFilter;
