"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

type StockGaugeChartProps = {
  onHold: number;
  pending: number;
};

const COLORS = ["#FFBB28", "#00C49F"];

const StockGauge: React.FC<StockGaugeChartProps> = ({ onHold, pending }) => {
  const total = onHold + pending;
  const data = [
    { name: "On Hold", value: onHold },
    { name: "Pending", value: pending },
  ];

  return (
    <div className="flex justify-center items-center">
      <PieChart
        width={200}
        height={130}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={100}
          cx="50%"
          cy="100%"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number, name: string) => [`${value}`, name]}
          contentStyle={{ backgroundColor: "#fff", borderColor: "#ccc" }}
        />
        <Legend
          verticalAlign="bottom"
          layout="horizontal"
          iconType="circle"
          wrapperStyle={{ margin: 0, padding: 0 }}
        />
      </PieChart>
    </div>
  );
};

export default StockGauge;
