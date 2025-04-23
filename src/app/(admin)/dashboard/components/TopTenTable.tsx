"use client";

import React, { useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/react";
import { productsData, ProductTypes } from "../data/products";
import usePriceFormatter from "@/app/hooks/usePriceFormatter";

const columns = [
  {
    key: "name",
    label: "Product",
  },
  {
    key: "price",
    label: "Price",
  },
];

const TopTenTable = () => {
  const { format } = usePriceFormatter();

  const getTop10ProductsBySales = (data: ProductTypes[]) => {
    return data
      .sort(
        (a, b) =>
          parseInt(b.no_of_products_sold) - parseInt(a.no_of_products_sold)
      )
      .slice(0, 10);
  };

  const top10Products = getTop10ProductsBySales(productsData);

  const productCell = useCallback(
    (product: ProductTypes, columnKey: keyof ProductTypes) => {
      const cellValue = product[columnKey];
      switch (columnKey) {
        case "name":
          return (
            <>
              <p>{cellValue}</p>
              <p className="text-gray-500 text-small">
                <span className="text-green-600">
                  {product.no_of_products_sold}
                </span>{" "}
                orders
              </p>
            </>
          );
        case "price":
          return format(cellValue);
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <Table removeWrapper aria-label="Top 10 Selling Products Table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={top10Products}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {productCell(item, columnKey as keyof ProductTypes)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TopTenTable;
