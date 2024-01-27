export function formatAmount(amount: string | number): string {
  let res = "";
  if(typeof amount === "number") {
    res = amount.toString();
  } else {
    res = amount;
  }
  return res.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}
