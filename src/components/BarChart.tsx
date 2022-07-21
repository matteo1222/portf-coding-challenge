import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { BeerData } from "../utils/transformBeerData";

interface BarChartProps {
  data?: BeerData;
  tickValues: string[];
}

const data = [
  {
    country: "AD",
    "hot dog": 154,
    "hot dogColor": "hsl(349, 70%, 50%)",
    burger: 62,
    burgerColor: "hsl(106, 70%, 50%)",
    sandwich: 145,
    sandwichColor: "hsl(283, 70%, 50%)",
    kebab: 76,
    kebabColor: "hsl(314, 70%, 50%)",
    fries: 104,
    friesColor: "hsl(61, 70%, 50%)",
    donut: 198,
    donutColor: "hsl(239, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 171,
    "hot dogColor": "hsl(274, 70%, 50%)",
    burger: 143,
    burgerColor: "hsl(340, 70%, 50%)",
    sandwich: 132,
    sandwichColor: "hsl(82, 70%, 50%)",
    kebab: 198,
    kebabColor: "hsl(45, 70%, 50%)",
    fries: 126,
    friesColor: "hsl(317, 70%, 50%)",
    donut: 67,
    donutColor: "hsl(111, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 63,
    "hot dogColor": "hsl(251, 70%, 50%)",
    burger: 24,
    burgerColor: "hsl(191, 70%, 50%)",
    sandwich: 178,
    sandwichColor: "hsl(215, 70%, 50%)",
    kebab: 116,
    kebabColor: "hsl(341, 70%, 50%)",
    fries: 1,
    friesColor: "hsl(106, 70%, 50%)",
    donut: 190,
    donutColor: "hsl(222, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 59,
    "hot dogColor": "hsl(310, 70%, 50%)",
    burger: 195,
    burgerColor: "hsl(0, 70%, 50%)",
    sandwich: 92,
    sandwichColor: "hsl(174, 70%, 50%)",
    kebab: 85,
    kebabColor: "hsl(94, 70%, 50%)",
    fries: 0,
    friesColor: "hsl(290, 70%, 50%)",
    donut: 92,
    donutColor: "hsl(171, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 185,
    "hot dogColor": "hsl(122, 70%, 50%)",
    burger: 122,
    burgerColor: "hsl(165, 70%, 50%)",
    sandwich: 93,
    sandwichColor: "hsl(319, 70%, 50%)",
    kebab: 33,
    kebabColor: "hsl(63, 70%, 50%)",
    fries: 128,
    friesColor: "hsl(137, 70%, 50%)",
    donut: 192,
    donutColor: "hsl(330, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 123,
    "hot dogColor": "hsl(169, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(82, 70%, 50%)",
    sandwich: 3,
    sandwichColor: "hsl(334, 70%, 50%)",
    kebab: 115,
    kebabColor: "hsl(84, 70%, 50%)",
    fries: 92,
    friesColor: "hsl(186, 70%, 50%)",
    donut: 55,
    donutColor: "hsl(201, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 137,
    "hot dogColor": "hsl(109, 70%, 50%)",
    burger: 144,
    burgerColor: "hsl(6, 70%, 50%)",
    sandwich: 191,
    sandwichColor: "hsl(275, 70%, 50%)",
    kebab: 157,
    kebabColor: "hsl(83, 70%, 50%)",
    fries: 49,
    friesColor: "hsl(351, 70%, 50%)",
    donut: 95,
    donutColor: "hsl(300, 70%, 50%)",
  },
];

function BarChart(props: BarChartProps) {
  if (!props.data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ResponsiveBar
        data={props.data}
        keys={["beer_sum"]}
        indexBy="first_brewed"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickValues: props.tickValues,
          tickSize: 5,
          tickPadding: 3,
          tickRotation: -45,
          legend: "First Brewed Month",
          legendPosition: "middle",
          legendOffset: 45,
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
