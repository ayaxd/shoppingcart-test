import Product from './Product.js';
import { addPrice, subPrice } from './utils.js';

export default class ShoppingCart {
  constructor() {
    this.totalPrice = 0;
    this.products = [];
    this.productPriceMap = {};
  }

  addProduct(productName, quantity = 1) {
    let plusPrice = 0;
    const plusProducts = [];

    for (let i = 0; i < quantity; i++) {
      const productPrice = this.productPriceMap[productName];
      const product = new Product(productName, productPrice);
      plusPrice = addPrice(plusPrice, productPrice);
      plusProducts.push(product);
    }

    this.products = this.products.concat(plusProducts);
    this.totalPrice = addPrice(this.totalPrice, plusPrice);
    console.log('Successfully add product to the shopping cart.');
  }

  removeProduct(productName, quantity = 1) {
    const initProductNumber = this.products.length;

    let removeTimes = quantity;
    this.products = this.products.filter((product) => {
      if (product.name === productName && removeTimes > 0) {
        this.totalPrice = subPrice(this.totalPrice, product.price);
        removeTimes--;
        return false;
      } else {
        return true;
      }
    });

    if (this.products.length === initProductNumber && quantity > 0) {
      console.error('Can not remove product that is not in shopping cart.');
    } else {
      console.log('Successfully remove product from the shopping cart.');
    }
  }

  addItemPrice(name, price) {
    this.productPriceMap[name] = price;
  }
}
