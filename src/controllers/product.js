/* eslint-disable import/extensions */
import Product from '../models/product.js';

export async function getProducts(req, res) {
  console.info('Get products');
  const products = await Product.find({}, {
    _id: 1,
    name: 1,
  });
  res.send(products);
}

export async function createProduct(req, res) {
  console.info('Create new product');
  const product = new Product(req.body);
  await product.save();

  res.send({
    // eslint-disable-next-line no-underscore-dangle
    id: product._id,
  });
}

export async function testMethod(req, res) {
  console.info('Test method');
  res.send('SUCCESS');
}
