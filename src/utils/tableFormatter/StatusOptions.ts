export type ProductStatus = "active" | "paused" | "archived";

export interface StatusOption {
  name: string;
  uid: ProductStatus;
}

export const statusOptions: StatusOption[] = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Archived", uid: "archived" },
];
