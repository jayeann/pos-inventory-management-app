import { useCallback } from "react";

const usePriceFormatter = (
  locale: string = "en-PH",
  currency: string = "PHP"
): { format: (value: string | number) => string } => {
  const format = useCallback(
    (value: string | number): string => {
      const number = typeof value === "string" ? parseFloat(value) : value;
      if (isNaN(number)) return "";

      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
      }).format(number);
    },
    [locale, currency]
  );

  return { format };
};

export default usePriceFormatter;
