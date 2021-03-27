const { Router } = require('express');

const Phone = require('../app/schemas/Phone');
const Console = require('../app/schemas/Console');
const Other = require('../app/schemas/Other');

const router = new Router();

// Retorna todos os produtos
router.get('/', async (request, response) => {
  const products = [];

  const phones = await Phone.find();
  const consoles = await Console.find();

  phones.forEach((phone) => products.push(phone));
  consoles.forEach((console) => products.push(console));

  return response.json(products);
});

// Retorna todos os celulares
router.get('/phones', async (request, response) => {
  const phones = await Phone.find();

  return response.json(phones);
});

// Retorna todos os celulares de acordo com a marca
router.get('/phones/:brand', async (request, response) => {
  const { brand } = request.params;

  const phones = await Phone.find().where('brand').equals(brand);

  return response.json(phones);
});

// Retorna todos os consoles
router.get('/consoles', async (request, response) => {
  const consoles = await Console.find();

  return response.json(consoles);
});

// Retorna todos os consoles de acordo com a marca
router.get('/consoles/:brand', async (request, response) => {
  const { brand } = request.params;

  const consoles = await Console.find().where('brand').equals(brand);

  return response.json(consoles);
});

router.get('/others', async (request, response) => {
  const otherProducts = await Other.find();

  return response.json(otherProducts);
});

module.exports = router;
