import "./App.css";
import NumberFilter from "./components/NumberFilter";
import MonthRangeFilter from "./components/MonthRangeFilter";
import { useState } from "react";

function App() {
  const [startMonth, setStartMonth] = useState<Date | null>(null);
  const [endMonth, setEndMonth] = useState<Date | null>(null);
  return (
    <main className="App">
      <div className="FilterBar">
        <MonthRangeFilter
          startMonth={startMonth}
          setStartMonth={setStartMonth}
          endMonth={endMonth}
          setEndMonth={setEndMonth}
        />
        <div className="Space"></div>
        <NumberFilter label="Filter By ABV" />
      </div>
    </main>
  );
}

export default App;
