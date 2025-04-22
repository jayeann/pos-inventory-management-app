import React from "react";
import { Card, CardHeader } from "@heroui/react";

interface ChartCardProps {
  title: string;
  children?: React.ReactNode;
}

export default function ChartCard({ title, children }: ChartCardProps) {
  return (
    <Card className="flex-auto bg-white p-2">
      <CardHeader className="text-small font-bold">{title}</CardHeader>
      {children}
    </Card>
  );
}
