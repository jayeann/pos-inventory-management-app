import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductModal from "../ProductModal";

describe("ProductModal", () => {
  const onOpenChange = jest.fn(); // mock the onOpenChange function
  it("renders add product modal with title when isAdd is true", () => {
    render(
      <ProductModal isOpen={true} isAdd={true} onOpenChange={onOpenChange} />
    );
    expect(screen.getByText("Add Product")).toBeInTheDocument();
  });

  it("renders edit product modal when isAdd is false", () => {
    render(
      <ProductModal isOpen={true} isAdd={false} onOpenChange={onOpenChange} />
    );
    expect(screen.getByText("Edit Product")).toBeInTheDocument();
  });

  it("calls onOpenChange when close button is clicked", () => {
    render(
      <ProductModal isOpen={true} isAdd={true} onOpenChange={onOpenChange} />
    );
    fireEvent.click(screen.getByText("Close"));
    expect(onOpenChange).toHaveBeenCalled();
  });
});
