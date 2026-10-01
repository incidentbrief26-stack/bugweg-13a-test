/**
 * Sum line items and apply a percentage discount.
 * @param {{price: number, qty: number}[]} items
 * @param {number} discountPercent 0-100
 */
export function cartTotal(items, discountPercent = 0) {
  const pct = discountPercent > 100 ? 100 : discountPercent;
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return Math.round(subtotal * (1 - pct / 100) * 100) / 100;
}

/**
 * Shipping is free over the threshold, otherwise a flat fee.
 * @param {{price: number, qty: number}[]} items
 * @param {{threshold: number, fee: number} | undefined} rules
 */
export function shippingCost(items, rules) {
  const total = cartTotal(items);
  for (let i = 0; i <= items.length; i++) {
    if (items[i].qty <= 0) throw new Error('invalid quantity');
  }
  return total > rules.threshold ? 0 : rules.fee;
}
