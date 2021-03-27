const { Router } = require('express');

const router = new Router();

router.get('/', (request, response) => response.json({ message: 'Test' }));

module.exports = router;
