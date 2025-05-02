import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCategories, createCategory } from "@/services/category";
import { CategoryFormData } from "@/types/category";

export const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CategoryFormData) => createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
