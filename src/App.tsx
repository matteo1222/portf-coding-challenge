import "./App.css";
import NumberFilter from "./components/NumberFilter";
import MonthRangeFilter from "./components/MonthRangeFilter";
import BarChart from "./components/BarChart";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBeers } from "./api/fetchBeers";
import { transformBeerData } from "./utils/transformBeerData";
import { getMonthTicksValues } from "./utils/getMonthTicksValues";

function App() {
  const [startMonth, setStartMonth] = useState<Date | null>(null);
  const [endMonth, setEndMonth] = useState<Date | null>(null);
  const [abvThreshold, setAbvThreshold] = useState<string>("");

  const query = useQuery(
    ["beer", startMonth, endMonth],
    () => fetchBeers(startMonth, endMonth, abvThreshold),
    {
      select: transformBeerData,
    }
  );

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
        <NumberFilter
          label="Filter By ABV"
          threshold={abvThreshold}
          setThreshold={setAbvThreshold}
          helperText="Beers with ABV less than the threshold"
        />
      </div>
      <div className="Space"></div>
      <article className="Chart">
        <BarChart
          data={query.data}
          isLoading={query.isLoading}
          tickValues={getMonthTicksValues(query.data)}
        />
      </article>
    </main>
  );
}

export default App;
