import React from "react";
import NumberFilter from "./NumberFilter";
import DateRangeFilter from "./DateRangeFilter";
import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="FilterBar">
      <DateRangeFilter />
      <NumberFilter />
    </div>
  );
}

export default FilterBar;
