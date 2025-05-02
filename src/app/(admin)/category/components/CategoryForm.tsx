"use client";

import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input, Form, Textarea, Button } from "@heroui/react";
import ColorPicker from "./ColorPicker";
import IconPicker from "./IconPicker";

import { db } from "@/services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAddCategory } from "@/hooks/useAddCategory";
import { CategoryFormData } from "@/types/category";

const auth = getAuth();

const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  color: z.string().min(1, "Color is required"),
  icon: z.string().min(2, "Pick an icon"),
  description: z.string().min(5, "Description must be at least 5 characters"),
});

type CategoryForm = z.infer<typeof categorySchema>;

export default function CategoryCard({ onClose }: any) {
  const { mutateAsync } = useAddCategory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<CategoryForm>({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit = async (data: CategoryFormData) => {
    if (data) {
      try {
        await mutateAsync({
          ...data,
          createdAt: Timestamp.now(),
        });
        reset();
        onClose();
        toast.success("Category saved successfully!");
      } catch (error) {
        toast.error("Failed to save category. Please try again.");
        console.error("❌ Error saving category:", error);
      }
    }
  };

  const handleReset = () => {
    console.log("❌ Form reset.");
    reset();
    onClose();
  };

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      onSubmit={handleSubmit(onSubmit)}
      onReset={handleReset}
    >
      <div className="flex flex-col gap-4 w-full">
        <Input
          isRequired
          {...register("name")}
          errorMessage={errors.name?.message}
          label="Category Name"
          labelPlacement="outside"
          placeholder="Enter category name"
        />

        <Textarea
          isRequired
          {...register("description")}
          errorMessage={errors.description?.message}
          label="Description"
          labelPlacement="outside"
          placeholder="Enter description"
        />

        <Controller
          name="color"
          control={control}
          render={({ field }) => <ColorPicker {...field} />}
        />

        <Controller
          name="icon"
          control={control}
          render={({ field }) => <IconPicker {...field} />}
        />
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <Button color="danger" variant="light" type="reset">
          Cancel
        </Button>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
