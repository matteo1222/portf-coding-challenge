import React from "react";
import { Bar } from "@nivo/bar";
import { BeerData } from "../utils/transformBeerData";
import CircularProgress from "@mui/material/CircularProgress";

interface BarChartProps {
  data?: BeerData;
  tickValues: string[];
}

const MIN_TICK_FONT_SIZE = 4;
const MAX_TICK_FONT_SIZE = 12;
const RATIO = 200;

function BarChart(props: BarChartProps) {
  if (!props.data) {
    return <CircularProgress size={60} />;
  }
  // make tick font size responsive based on data length
  let tickFontSize = Math.min(
    MAX_TICK_FONT_SIZE,
    (MIN_TICK_FONT_SIZE * RATIO) / props.data.length
  );

  return (
    <>
      <Bar
        data={props.data}
        keys={["beer_sum"]}
        indexBy="first_brewed"
        width={1000}
        height={500}
        margin={{ top: 50, right: 30, bottom: 60, left: 50 }}
        theme={{ axis: { ticks: { text: { fontSize: tickFontSize } } } }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickValues: props.tickValues,
          tickSize: 5,
          tickPadding: 3,
          tickRotation: -90,
          legend: "First Brewed Month",
          legendPosition: "middle",
          legendOffset: 55,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Beer Sum",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        role="application"
        ariaLabel="Beer Num First Brewed"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
      />
    </>
  );
}

export default BarChart;
