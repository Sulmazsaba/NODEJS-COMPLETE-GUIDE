const products = [];
exports.product = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  static getAll() {
    return products;
  }
};
