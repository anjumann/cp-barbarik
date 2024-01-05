"use client"
import { Card, DonutChart, Title } from "@tremor/react";
import React, { useState } from "react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  // ...
  {
    name: "Zurich",
    sales: 1398,
  },
];

const valueFormatter = (number: number | bigint) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export const DonutChartUsage = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Card className="mx-auto max-w-xs bg-glassmorph ">
        <Title>Sales</Title>
        <DonutChart
          className="mt-6"
          data={cities}
          category="sales"
          index="name"
          colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
          onValueChange={(v) => setValue(v)}
        />
        <code className="line-clamp-3" >{JSON.stringify(value)}</code>
      </Card>
    </>
  );
};

