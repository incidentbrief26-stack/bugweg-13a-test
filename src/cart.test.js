import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cartTotal } from './cart.js';

test('applies discount', () => {
  assert.equal(cartTotal([{ price: 10, qty: 2 }], 10), 18);
});

test('clamps negative discount', () => {
  assert.equal(cartTotal([{ price: 10, qty: 1 }], -50), 10);
});
