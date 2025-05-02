import { useMutation, useQueryClient } from "@tanstack/react-query";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/services/firebase";
import { CategoryFormData } from "@/types/category";

export const useAddCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newCategory: CategoryFormData) => {
      await addDoc(collection(db, "categories"), newCategory);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
