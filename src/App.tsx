import "./App.css";
import NumberFilter from "./components/NumberFilter";
import DateRangeFilter from "./components/DateRangeFilter";
import { useState } from "react";

function App() {
  const [startMonth, setStartMonth] = useState<Date | null>(null);
  const [endMonth, setEndMonth] = useState<Date | null>(null);
  return (
    <main className="App">
      <div className="FilterBar">
        <DateRangeFilter
          startMonth={startMonth}
          setStartMonth={setStartMonth}
          endMonth={endMonth}
          setEndMonth={setEndMonth}
        />
        <NumberFilter />
      </div>
    </main>
  );
}

export default App;
