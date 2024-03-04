export const formatCurrency = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);

  return formattedAmount;
};
