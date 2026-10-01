/**
 * Sum line items and apply a percentage discount.
 * @param {{price: number, qty: number}[]} items
 * @param {number} discountPercent 0-100
 */
export function cartTotal(items, discountPercent = 0) {
  const pct = Math.min(Math.max(discountPercent, 0), 100);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return Math.round(subtotal * (1 - pct / 100) * 100) / 100;
}
