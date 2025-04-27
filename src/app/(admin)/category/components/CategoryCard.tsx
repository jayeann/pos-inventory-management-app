"use client";
import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Ban, LucideIcon } from "lucide-react";
import { colorMap } from "@/utils/colorMap";
import * as Icons from "lucide-react";

type CategoryItem = {
  icon: string;
  text: string;
  value: string;
  color: string;
};

function CategoryCard({ value, text, color, icon }: CategoryItem) {
  const colorHex = colorMap[color] || colorMap["default"];
  const Icon = (Icons[icon as keyof typeof Icons] ?? Ban) as LucideIcon;
  return (
    <Card
      className={"overflow-hidden h-32"}
      style={{ backgroundColor: `${colorHex}50` }}
    >
      <div className="absolute right-[-30px] opacity-10 pointer-events-none">
        <Icon size={120} />
      </div>
      <CardBody className="mt-auto flex-none">
        <div className="text-2xl font-bold">{text}</div>
        <div className=" text-gray-500 italic ">{value}</div>
      </CardBody>
    </Card>
  );
}

export default CategoryCard;
