// const assert = require('chai').assert;
import { equal } from 'assert';

import ShoppingCart from './ShoppingCart.js';

let shoppingCart = new ShoppingCart();

beforeEach(() => {
  shoppingCart.addItemPrice('Apple', 4.95);
  shoppingCart.addItemPrice('Orange', 3.99);
});

describe('add product', () => {
  it('total price should be equal to 13.89', () => {
    shoppingCart.addProduct('Apple', 2);
    shoppingCart.addProduct('Orange');
    equal(shoppingCart.totalPrice, 13.89);
  });
});

describe('add and remove product', () => {
  it('total price should be equal to 23.79', () => {
    shoppingCart.addProduct('Apple', 3);

    shoppingCart.removeProduct('Apple');
    equal(shoppingCart.totalPrice, 23.79);
  });
});
