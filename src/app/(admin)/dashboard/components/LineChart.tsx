"use client";

import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { convertDate, convertValue } from "@/utils/formatters";
import { salesStatData } from "@/app/(admin)/dashboard/data/salesStat";

type ChartData = {
  time: number;
  close: number;
};

const LineChart: React.FC = () => {
  const [data, setData] = useState<ChartData[]>(salesStatData["Data"]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={data}
        margin={{ top: 25, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#129a74" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" tickFormatter={convertDate} />
        <YAxis tickFormatter={convertValue} />
        <Tooltip />
        <CartesianGrid vertical={false} stroke="#DDD" />
        <Line
          type="monotone"
          unit="M"
          strokeLinecap="round"
          strokeWidth={2}
          strokeDasharray="40% 60%"
          dataKey="close"
          stroke="#006991"
          dot={false}
          legendType="none"
        />
        <Area
          type="monotone"
          dataKey="close"
          stroke={undefined}
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
