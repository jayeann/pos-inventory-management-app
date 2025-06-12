export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  stock: number;
  price: number;
  status: "active" | "inactive" | "paused" | "archived";
  visibility: "public" | "private" | "archived" | "unlisted";
}

export type ProductFormData = Omit<Product, "id">;
