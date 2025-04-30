import { DefaultColumn } from "./DefaultFormat";

export const productColumns: DefaultColumn[] = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "CATEGORY", uid: "category", sortable: true },
  { name: "IMAGE", uid: "image" },
  { name: "STOCK", uid: "stock", sortable: true },
  { name: "PRICE", uid: "price", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "VISIBILITY", uid: "visibility" },
  { name: "ACTIONS", uid: "actions" },
];
