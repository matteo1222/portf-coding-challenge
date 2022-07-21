import React, { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";

interface DateRangeFilterProps {
  startMonth: Date | null;
  setStartMonth: Dispatch<SetStateAction<Date | null>>;
  endMonth: Date | null;
  setEndMonth: Dispatch<SetStateAction<Date | null>>;
}
// TODO: set max Date to today
function DateRangeFilter(props: DateRangeFilterProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack direction="row" spacing={2}>
        {/* Start Date */}
        <DatePicker
          views={["year", "month"]}
          label="Start Year and Month"
          value={props.startMonth}
          onChange={(newValue) => {
            props.setStartMonth(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />

        {/* End Date */}
        <DatePicker
          views={["year", "month"]}
          label="End Year and Month"
          value={props.endMonth}
          onChange={(newValue) => {
            props.setEndMonth(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default DateRangeFilter;
