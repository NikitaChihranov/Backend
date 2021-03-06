let router = require('express').Router();
let ProductController = require('../controllers/productController');

router.get('/limit/:limit/skip/:skip', ProductController.getAll);
router.get('/:name', ProductController.getByName);
router.get('/id/:id', ProductController.getById);
router.get('/author/:id/from/:dateFrom/to/:dateTo', ProductController.getProductsByAuthor);
router.get('/author1/:id', ProductController.getProductsByAuthor1);
router.post('/', ProductController.create);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);
router.post('/deleteAll', ProductController.deleteAll);
router.post('/upload/:id', ProductController.uploadFile);
router.put('/updatePhotos/:id', ProductController.updateFile);

module.exports = router;