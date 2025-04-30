"use client";
import React from "react";
import CustomTable from "@/(components)/CustomTable";
import Header from "@/(components)/Header";
import { productColumns } from "@/utils/tableFormatter/ProductsTableFormat";
import { products } from "./data/productData";
import {
  ProductStatus,
  statusOptions,
} from "@/utils/tableFormatter/StatusOptions";
import {
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
} from "@heroui/react";
import { statusColorMap } from "@/utils/statusMap";
import { EllipsisVertical } from "lucide-react";

const Product = () => {
  return (
    <>
      <Header name="Products" />
      <CustomTable
        id="product-table"
        columns={productColumns}
        data={products}
        statusOptions={statusOptions}
        sortColumn="name"
        sortDirection="ascending"
        isStatusFilterVisible={true}
        renderCell={(item, columnKey) => {
          const cellValue = item[columnKey];

          switch (columnKey) {
            case "name":
              return (
                <User
                  avatarProps={{ radius: "lg", src: item.avatar }}
                  description={item.description}
                  name={cellValue}
                >
                  {item.email}
                </User>
              );
            case "role":
              return (
                <div className="flex flex-col">
                  <p className="text-bold text-small capitalize">{cellValue}</p>
                  <p className="text-bold text-tiny capitalize text-default-400">
                    {item.team}
                  </p>
                </div>
              );
            case "status":
              return (
                <Chip
                  className="capitalize"
                  color={statusColorMap[item.status as ProductStatus]}
                  size="sm"
                  variant="flat"
                >
                  {cellValue}
                </Chip>
              );
            case "actions":
              return (
                <div className="relative flex justify-end items-center gap-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly size="sm" variant="light">
                        <EllipsisVertical
                          className="text-default-300"
                          size={24}
                          width={24}
                          height={24}
                        />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem key="view">View</DropdownItem>
                      <DropdownItem key="edit">Edit</DropdownItem>
                      <DropdownItem key="delete">Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              );
            default:
              return cellValue;
          }
        }}
      />
    </>
  );
};

export default Product;
