export const addPrice = (currentPrice, itemPrice) => {
  return +(currentPrice + itemPrice).toFixed(3);
};

export const subPrice = (currentPrice, itemPrice) => {
  return +(currentPrice - itemPrice).toFixed(3);
};
