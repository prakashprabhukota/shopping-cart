// We’ll pass in undefined as the locale to use the visitors default language. We’ll also include an object of options.
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "INR",
  style: "currency",
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};
