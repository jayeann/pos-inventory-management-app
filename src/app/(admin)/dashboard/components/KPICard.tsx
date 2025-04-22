import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import {
  ShoppingCart,
  FileChartColumnIncreasing,
  FileChartLine,
  ShoppingBasket,
  Ban,
  ShoppingBag,
  Undo2,
  HandCoins,
  CircleX,
  LucideIcon,
  Package,
  PackageMinus,
} from "lucide-react";

const colorMap: Record<string, string> = {
  green: "#10B981",
  orange: "#FF9800",
  yellow: "#FFEB3B",
  blue: "#3B82F6",
  purple: "#9C27B0",
  red: "#F44336",
  pink: "#E91E63",
  default: "#6B7280",
};

const iconsMap: Record<string, LucideIcon> = {
  shoppingbasket: ShoppingBasket,
  shoppingcart: ShoppingCart,
  filechartline: FileChartLine,
  filechartcolumnincreasing: FileChartColumnIncreasing,
  shoppingbag: ShoppingBag,
  return: Undo2,
  purchase: HandCoins,
  cancel: CircleX,
  package: Package,
  packageminus: PackageMinus,
};

export type KPIItem = {
  icon: string;
  text: string;
  value: string;
  color: string;
};

const KPIItems = ({ icon, text, value, color }: KPIItem) => {
  const colorHex = colorMap[color] || colorMap["default"];
  const IconComponent = iconsMap[icon] || Ban;
  return (
    <div className="flex">
      <div className="flex items-center justify-center mr-2">
        <div
          className="px-3 py-3 rounded-full"
          style={{ backgroundColor: `${colorHex}20` }} // Light background
        >
          <IconComponent className="w-6 h-6" style={{ color: colorHex }} />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-xs text-gray-500">{text}</p>
        <p className="text-xl font-black">{value}</p>
      </div>
    </div>
  );
};

interface KPICardProps {
  kpiData: KPIItem[];
  title: string;
}

const KPICard = ({ kpiData, title }: KPICardProps) => {
  const gridColsClass =
    kpiData.length <= 2
      ? "grid grid-cols-2 md:grid-cols-1"
      : "grid grid-cols-2 md:grid-cols-2";

  return (
    <Card className="flex-2 bg-white p-2">
      <CardHeader className="text-small font-bold">{title}</CardHeader>
      <CardBody className={`grid ${gridColsClass} gap-4`}>
        {kpiData.length > 0 ? (
          kpiData.map((item, index) => (
            <KPIItems
              key={index}
              icon={item.icon}
              text={item.text}
              value={item.value}
              color={item.color}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </CardBody>
    </Card>
  );
};

export default KPICard;
