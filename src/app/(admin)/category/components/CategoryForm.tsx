// pages/contact.tsx
"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input, Form } from "@heroui/react";
import ColorPicker from "./ColorPicker";
import IconPicker from "./IconPicker";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  color: z.string().min(1, "Color is required"),
  icon: z.string().min(5, "Message must be at least 5 characters"),
  description: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function CategoryCard() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  console.log({ ...register("color") });
  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent!");
      reset();
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Form
        className="w-full justify-center items-center space-y-4"
        // validationErrors={errors}
        // onReset={() => setSubmitted(null)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4 w-full">
          <Input
            isRequired
            {...register("name")}
            errorMessage={errors.name && <p>{errors.name.message}</p>}
            label="Category Name"
            labelPlacement="outside"
            name="category name"
            placeholder="Enter category name"
          />

          <Input
            isRequired
            {...register("description")}
            errorMessage={
              errors.description && <p>{errors.description.message}</p>
            }
            label="Description"
            labelPlacement="outside"
            name="description"
            placeholder="Enter description"
          />

          <Controller
            name="color"
            control={control}
            render={({ field }) => <ColorPicker {...field} />}
          />

          <IconPicker />

          {/* 
         

          <Checkbox
            isRequired
            classNames={{
              label: "text-small",
            }}
            isInvalid={!!errors.terms}
            name="terms"
            validationBehavior="aria"
            value="true"
            onValueChange={() =>
              setErrors((prev) => ({ ...prev, terms: undefined }))
            }
          >
            I agree to the terms and conditions
          </Checkbox> */}

          {/* {errors.terms && (
            <span className="text-danger text-small">{errors.terms}</span>
          )}

          <div className="flex gap-4">
            <Button className="w-full" color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="bordered">
              Reset
            </Button>
          </div> */}
        </div>

        {/* {submitted && (
          <div className="text-small text-default-500 mt-4">
            Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
          </div>
        )} */}
      </Form>
    </>
  );
}
