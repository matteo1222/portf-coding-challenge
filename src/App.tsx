import "./App.css";
import NumberFilter from "./components/NumberFilter";
import MonthRangeFilter from "./components/MonthRangeFilter";
import BarChart from "./components/BarChart";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBeers } from "./api/fetchBeers";

function App() {
  const [startMonth, setStartMonth] = useState<Date | null>(null);
  const [endMonth, setEndMonth] = useState<Date | null>(null);

  const query = useQuery(["beer"], fetchBeers);
  console.log(query.data);
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
      <div className="Space"></div>
      <article className="Chart">
        <BarChart />
      </article>
    </main>
  );
}

export default App;
