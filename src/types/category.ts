export type Category = {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
  createdAt?: any;
};

export type CategoryFormData = Omit<Category, "id">;
