import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  NumberInput,
  Input,
} from "@heroui/react";

interface ProductModalProps {
  onOpenChange: () => void;
  isOpen: boolean;
  isAdd: boolean;
}

export default function ProductModal({
  onOpenChange,
  isOpen,
  isAdd,
}: ProductModalProps) {
  return (
    <>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {isAdd ? "Add" : "Edit"} Product
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Product"
                  placeholder="Enter your product name"
                  variant="bordered"
                  errorMessage={({ validationDetails, validationErrors }) => {
                    if (validationDetails.typeMismatch) {
                      return "Please enter a valid email address";
                    }

                    return validationErrors;
                  }}
                  isRequired
                />
                <NumberInput
                  isRequired
                  label="Price"
                  defaultValue={0}
                  formatOptions={{
                    style: "currency",
                    currency: "Php",
                  }}
                />

                <NumberInput isRequired label="Stock" defaultValue={0} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
